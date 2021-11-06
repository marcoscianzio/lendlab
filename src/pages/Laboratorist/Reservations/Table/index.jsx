import { Table } from "@components/Table";
import TableSkeleton from "@components/Table/TableSkeleton";
import { useReservationsAndMaxId } from "@graphql/reservations/custom-hooks";
import { RESERVATIONS_SUSCRIPTION } from "@graphql/reservations/graphql-suscriptions";
import { groupAndMerge } from "@utils/groupAndMerge";
import React from "react";

import { COLUMNS } from "./columns";

const ReservationsTable = () => {
  const [{ subscribeToMore, loading, error, data }, document] = useReservationsAndMaxId();
  let mergedReservations;

  if (loading || !data) {
    return <TableSkeleton theads={["ID", "Fecha y Hora", "Finalizada", "Usuario", "Materiales"]} />;
  } else {
    mergedReservations = groupAndMerge(data?.getReservations, "id_reserva", "material");
  }

  if (error) {
    return error.message;
  }

  return (
    <Table
      columns={COLUMNS}
      data={mergedReservations}
      id="Reservas"
      subscribeToNew={() => {
        subscribeToMore({
          document: RESERVATIONS_SUSCRIPTION,

          updateQuery: (prev, { subscriptionData }) => {
            console.log({ prev, subscriptionData });
            if (!subscriptionData.data) return prev;

            const newSuscription = subscriptionData.data.newReservationSubscription;

            console.log({ newSuscription });

            return Object.assign({}, prev, {
              getReservations: [newSuscription, ...prev.getReservations],
            });
          },
        });
      }}
    />
  );
};

export default ReservationsTable;
