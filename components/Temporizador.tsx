import styles from "../styles/Temporizador.module.css";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

interface TemporizadorProps {
  key: any;
  duracao: number;
  tempoEsgotado: () => void;

}

export default function Temporizador(props: TemporizadorProps) {
  return (
    <div className={styles.temporizador}>
      <CountdownCircleTimer
        isPlaying
        duration={props.duracao}
        size={120}
        onComplete={props.tempoEsgotado}
        colors={["#BCE596", "#F7B801", "#FF0000"]}
        colorsTime={[props.duracao * 0.66, props.duracao * 0.33, 0
        ]}
      >
      {({remainingTime}) => remainingTime}
      </CountdownCircleTimer>
    </div>
  );
}
