import React from "react";
import { eventData } from "../../components/Events/data";
import Events from "../../components/Events/index";

const Eventos = () => {
  return <Events heading="Nossos eventos" data={eventData} />;
};

export default Eventos;
