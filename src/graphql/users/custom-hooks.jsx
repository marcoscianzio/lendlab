import { useMutation, useQuery } from "@apollo/client";
import { useToast } from "@chakra-ui/toast";

import { CREATE_USER, DELETE_USER } from "./graphql-mutations";
import { GET_ALL_USERS, GET_USER } from "./graphql-queries";

export const useUsers = () => {
  const result = useQuery(GET_ALL_USERS);

  return result;
};

export const useRegister = () => {
  const toast = useToast();

  const [register, result] = useMutation(CREATE_USER, {
    onCompleted: ({ register }) =>
      toast({
        title: "Usuario registrado con exito",
        description: "Se ha registrado el usuario " + register.nombre,
        status: "success",
        duration: 5000,
        isClosable: true,
      }),
  });

  return [register, result];
};

export const useDeleteUser = () => {
  const toast = useToast();

  const [deleteUser, result] = useMutation(DELETE_USER, {
    onCompleted: () =>
      toast({
        title: "Usuario eliminado con éxito",
        description: "Se ha eliminado el usuario con éxito",
        status: "success",
        duration: 5000,
        isClosable: true,
      }),
  });

  return [deleteUser, result];
};

export const useUser = (cedula) => {
  const result = useQuery(GET_USER, { variables: { cedula: parseInt(id) } });

  const [updateUser] = useMutation(UPDATE_US, {
    onCompleted: ({ updateReservation }) => {
      toast({
        title: "Reserva modificada con éxito",
        description: "Se ha modificado correctamente la reserva #" + updateReservation.id_reserva,
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    },
  });

  return [updateReservation, result];
};