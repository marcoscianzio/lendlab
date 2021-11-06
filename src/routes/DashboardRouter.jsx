import Footer from "@components/Footer";
import TabsNav from "@components/Tabs/TabsNav";
import Incidents from "@pages/Laboratorist/Incidents";
import Lends from "@pages/Laboratorist/Lends";
import Lend from "@pages/Laboratorist/Lends/Lend";
import NewLend from "@pages/Laboratorist/Lends/New";
import Materials from "@pages/Laboratorist/Materials";
import Material from "@pages/Laboratorist/Materials/Material";
import NewMaterial from "@pages/Laboratorist/Materials/New";
import Reservations from "@pages/Laboratorist/Reservations";
import Summary from "@pages/Laboratorist/Summary";
import Users from "@pages/Laboratorist/Users";
import NewUser from "@pages/Laboratorist/Users/New";
import { DASHBOARD_ROUTES } from "@utils/constants/routes";
import React from "react";
import { Redirect, Route, Switch } from "react-router";

const DashboardRoutes = () => {
  return (
    <>
      <TabsNav routes={DASHBOARD_ROUTES} />
      <Switch>
        <Route exact component={Summary} path="/dashboard/resumen" />

        <Route exact component={Lends} path="/dashboard/prestamos" />
        <Route exact component={NewLend} path="/dashboard/prestamos/nuevo" />
        <Route exact component={Lend} path="/dashboard/prestamos/:id" />

        <Route exact component={Incidents} path="/dashboard/incidentes" />

        <Route exact component={Reservations} path="/dashboard/reservas" />
        {/* <Route component={LabReservesPage} path="/dashboard/reserva/:id" /> */}

        <Route exact component={Materials} path="/dashboard/materiales" />
        <Route exact component={NewMaterial} path="/dashboard/materiales/nuevo" />
        <Route exact component={Material} path="/dashboard/materiales/:id" />

        <Route exact component={Users} path="/dashboard/usuarios" />
        <Route exact component={NewUser} path="/dashboard/usuarios/nuevo" />
        {/* <Route component={LabUsersPage} path="/dashboard/usuario/:id" /> */}

        <Redirect to="/dashboard/prestamos" />
      </Switch>
      <Footer />
    </>
  );
};

export default DashboardRoutes;
