import React, { useState } from "react";
import svg1 from "../assets/Frame15.svg";
import linesep from "../assets/Linesep.svg";
import secondvid from "../assets/secondvideo.mp4";
import one from "../assets/1.png";
import two from "../assets/2.png";
import three from "../assets/3.png";
import lastfframe from "../assets/lastframe.png";
import vframe from "../assets/vframe.png";
import linesep2 from "../assets/linesep2.png";

const Second = () => {
  const questions = [
    {
      questionText: "У якому місті відбувається дія гри Cyberpunk 2077?",
      answerOptions: [
        { answerText: "Місто Сонячний Берег", isCorrect: false },
        { answerText: "Мегаполіс Найт Сіті", isCorrect: true },
      ],
    },
    {
      questionText: "Яку роль ви виконуєте у грі ?",
      answerOptions: [
        { answerText: "Найманця-розбійника", isCorrect: true },
        { answerText: "Вченого-винахідника", isCorrect: false },
      ],
    },
    {
      questionText:
        "Що переслідує головний герой гри, який є ключем до безсмертя?",
      answerOptions: [
        { answerText: "Чарівний камінь", isCorrect: false },
        { answerText: "Унікальний імплант", isCorrect: true },
      ],
    },
    {
      questionText: "Що можна робити з винагородою, заробленою в грі?",
      answerOptions: [
        { answerText: "Купувати сувеніри", isCorrect: false },
        { answerText: "Купувати вдосконалення", isCorrect: true },
      ],
    },
    {
      questionText:
        'Проти кого можна боротися у "Cyberpunk 2077", щоб заробити авторитет на вулицях?',
      answerOptions: [
        { answerText: " Проти корпоративної безпеки", isCorrect: true },
        { answerText: "Проти вчителів та науковців", isCorrect: false },
      ],
    },
  ];
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  function scrollToBottom() {
    window.scrollTo({
      top: window.scrollY + 900,
      behavior: "smooth",
    });
  }

  return (
    <div className="second">
      <div className="svg1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1903"
          height="27"
          viewBox="0 0 1903 27"
          fill="full"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M1440 0H0V10.7378H79.7715L86.649 1.12172L86.6633 1.14655L86.6805 1.12172L98.6565 19.1178H108.347L114.087 10.862H322.498V10.8587L390.7 10.8177L392.246 8.60342L389.755 5.02559H394.747L392.246 8.60342L393.82 10.862H396.702L403.491 1.12172L403.5 1.13359L403.505 1.12172L421.543 27L431.114 13.2846L554.985 13.2436L557.153 16.3507L563.64 7.04015L567.967 13.2436L623.664 13.2846L629.092 5.49738H654.317L663.811 19.1178H667.568L691.003 18.9699L695.627 25.6041L702.562 15.6511L706.082 10.5834H767.367L769.846 7.03583L765.724 1.12172H773.977L769.846 7.03583L772.319 10.5834H881.522L888.399 1.12172L888.413 1.14655L888.43 1.12172L900.406 19.1178H910.097L915.836 10.862H1124.25V10.8361L1154.95 10.8177L1156.5 8.60342L1154.01 5.02559H1159L1156.5 8.60342L1158.07 10.862H1160.95L1167.74 1.12172L1167.75 1.13359L1167.76 1.12172L1185.79 27L1195.36 13.2846L1281.73 13.2436L1283.9 16.3507L1290.39 7.04015L1294.72 13.2436L1350.41 13.2846L1355.84 5.49738H1381.07L1390.56 19.1178H1394.32L1417.75 18.9699L1422.38 25.6041L1429.31 15.6511L1432.83 10.7184H1440V0ZM39.0202 6.71194H35.1233V1.12172H39.0202V6.71194ZM52.02 6.71194H50.7217V1.12172H52.02V6.71194ZM61.1115 6.71194H59.8132V1.12172H61.1115V6.71194ZM63.0825 6.71194H61.782V1.12172H63.0825V6.71194ZM667.487 13.7391H666.187V11.8768H667.487V13.7391ZM667.487 10.0112H666.187V8.14891H667.487V10.0112ZM677.564 13.7391H676.262V8.14891H677.564V13.7391ZM682.544 13.7391H681.243V11.8768H682.544V13.7391ZM840.77 6.71194H836.873V1.12172H840.77V6.71194ZM853.77 6.71194H852.472V1.12172H853.77V6.71194ZM862.862 6.71194H861.564V1.12172H862.862V6.71194ZM864.833 6.71194H863.532V1.12172H864.833V6.71194ZM1394.24 13.7391H1392.94V11.8768H1394.24V13.7391ZM1394.24 10.0112H1392.94V8.14891H1394.24V10.0112ZM1404.31 13.7391H1403.01V8.14891H1404.31V13.7391ZM1409.29 13.7391H1407.99V11.8768H1409.29V13.7391ZM560.231 20.7544L557.153 16.3507L554.083 20.7544H560.231ZM767.347 10.6126H772.339L772.319 10.5834H767.367L767.347 10.6126ZM1286.98 20.7544L1283.9 16.3507L1280.83 20.7544H1286.98Z"
            fill="#121211"
          />
        </svg>
      </div>
      <h1>Вітаємо в Найт Сіті</h1>
      <div className="background1">
        <img src={svg1} alt="" />
      </div>
      <div className="row1">
        <div className="title1">
          <h2>Найт Сіті змінює кожного</h2>
          <img src={linesep} alt="" />
          <p>
            Cyberpunk 2077 — це пригодницька історія з відкритим світом, дія
            якої відбувається в Ніч Місто, мегаполіс, одержимий владою, гламуром
            і тілом модифікація. Ви граєте за V, найманця-розбійника, який
            переслідує a єдиний у своєму роді імплантат, який є ключем до
            безсмертя. Ти можеш налаштувати кіберпрограму, набір навичок і стиль
            гри вашого персонажа, а також досліджуйте велике місто, де ваші
            рішення формують історію та світ навколо вас.
          </p>
        </div>
        <div className="video2">
          <video autoPlay loop muted type="video/mp4">
            <source src={secondvid} type="video/mp4" />
          </video>
        </div>
      </div>
      <div className="latestnews">
        <h1>Останні новини</h1>
      </div>
      <div className="pictures">
        <img src={one} alt="" />
        <img src={two} alt="" />
        <img src={three} alt="" />
      </div>
      <div className="lastframe">
        <img src={lastfframe} alt="" />
      </div>
      <div className="vframe">
        <img src={vframe} alt="" />
        <h2>ГРАЙТЕ ЗА НАЙМАНЦЯ-РОЗБІЙНИКА</h2>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="535"
          height="7"
          viewBox="0 0 535 7"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M28.2074 2.00005L535 2V0L0 4.67712e-05V2.00005V7.00005H25.3866L28.2074 2.00005Z"
            fill="#FCEE0A"
          />
        </svg>
        <p>
          Кіберпанк, втілений у "Cyberpunk 2077", занурює гравців у дистопічне
          майбутнє, де технології і людськість переплітаються в нерозривний
          вузол конфліктів та ідей. Гравці занурюються в світ, де передові
          кібернетичні удосконалення не лише змінюють людське тіло, але й
          ставлять під сумнів саму суть людської ідентичності. Через призму
          вулиць Найт Сіті, міста, яке ніколи не спить, і де кожен куток криє в
          собі історії боротьби за владу, за виживання, гравці відчують на собі
          вплив технологій на суспільство.
        </p>
        <button className="button" onClick={scrollToBottom}>
          ВПЕРЕД
        </button>
      </div>
      <div className="quiz">
        <div className="app">
          {showScore ? (
            <div className="score-section">
              Ви набрали {score} з {questions.length}
            </div>
          ) : (
            <>
              <div className="question-section">
                <div className="question-count">
                  <span>
                    Вікторина! Дайте відповідь на запитання по контенту{" "}
                  </span>
                </div>
                <div className="question-text">
                  {questions[currentQuestion].questionText}
                </div>
              </div>
              <div className="answer-section">
                {questions[currentQuestion].answerOptions.map(
                  (answerOption, index) => (
                    <button
                      onClick={() =>
                        handleAnswerButtonClick(answerOption.isCorrect)
                      }
                      key={index}
                    >
                      {answerOption.answerText}
                    </button>
                  )
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Second;
