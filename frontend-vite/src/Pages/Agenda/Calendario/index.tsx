import { useNavigate } from "react-router-dom";
import { useMemo, useCallback, useState, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import { toast } from "react-toastify";
import { useMutation, useQuery } from "react-query";
import moment from "moment";

import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";

import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "moment/locale/pt-br.js";

import { buscarTodosAgendamentos } from "./api";
import { atualizarHorarioEvento } from "./api/atualizarHorarioEvento/atualizarHorarioEvento";

import { retornaArrayEventosConvertido } from "../utils/retornaArrayConvertido";
import { eventosPadrao } from "../examples/eventosPadrao";
import { EventoBigCalendar } from "../../../types/EventoBigCalendar";

import { traducaoCabecalhoPortugues } from "../configs/traducaoCabecalhoPortugues";
import { eventoStyle } from "../configs/eventoStyle";
import { ModalCarregando } from "../../../Components/Modais/ModalCarregando";



const localizer = momentLocalizer(moment);
const DragAndDropCalendar = withDragAndDrop(Calendar);

export const Calendario = () => {
  const navigate = useNavigate();

  const arrayEventosConvertidos: EventoBigCalendar[] = [];
  const [agendamentos, setAgendamento] = useState<EventoBigCalendar[] | any>(
    []
  );

  const {
    data,
    isError: isErrorTodosEventos,
    isLoading: isCarregangdoTodosEventos,
  } = useQuery("listar-todos-item-fluxo-caixa", buscarTodosAgendamentos);

  const { mutate, isLoading } = useMutation(
    async (values: any) => await atualizarHorarioEvento(values),
    {
      onError: (error: any) => {
        toast.error(`Ops! : ${error.response.data}`);
      },
    }
  );

  // Converter Agendamento para Visiveis em BigCalendar
  useEffect(() => {
    const todosEventos = retornaArrayEventosConvertido(
      data?.data,
      arrayEventosConvertidos
    );
    setAgendamento(todosEventos);
  }, [data]);

  // Muda os eventos de lugar
  const aoMovimentarEvento = useCallback(
    ({ event, start, end }: any) => {
      mutate({ id: event.id, start: start, end: end });
      setAgendamento((prev: any) => {
        const existing = prev.find((ev: any) => ev.id === event.id) ?? {};
        const filtered = prev.filter((ev: any) => ev.id !== event.id);
        const retorno = [...filtered, { ...existing, start, end }];
        return retorno;
      });
    },
    [setAgendamento]
  );

  const eventoAoClicarNaTarefaCalendario = useCallback((event: any) => {
    navigate(`/agendamento/operacao/visualizar/${event.id}`);
  }, []);

  const { messages } = useMemo<any>(
    () => ({
      messages: traducaoCabecalhoPortugues,
    }),
    []
  );

  return (
    <div>
      {isLoading && <ModalCarregando />}
      <DragAndDropCalendar
        defaultDate={moment().toDate()}
        selectable
        defaultView="month"
        onSelectEvent={eventoAoClicarNaTarefaCalendario}
        messages={messages}
        localizer={localizer}
        resizable
        showAllEvents
        eventPropGetter={eventoStyle}
        onEventDrop={aoMovimentarEvento}
        onEventResize={aoMovimentarEvento}
        events={eventosPadrao}
        style={{ height: 600 }}
        step={20}
      />
      {isCarregangdoTodosEventos && <ModalCarregando />}
    </div>
  );
};
