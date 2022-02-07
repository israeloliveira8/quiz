import Questao from "../../../components/Questao";
import QuestaoModel from "../../../model/questao";
import RespostaModel from "../../../model/resposta";

const questoes: QuestaoModel[] = [
  // 1
  new QuestaoModel(306, "Qual bicho transmite a Doença de Chagas?", [
    RespostaModel.errada("Abelha"),
    RespostaModel.errada("Barata"),
    RespostaModel.errada("Pulga"),
    RespostaModel.certa("Barbeiro"),
  ]),

  // 2
  new QuestaoModel(
    202,
    'Qual fruto é conheciudo no Norte e Nordeste como "jerimum"?',
    [
      RespostaModel.errada("Caju"),
      RespostaModel.errada("Côco"),
      RespostaModel.errada("Chuchu"),
      RespostaModel.certa("Abóbora"),
    ]
  ),

  // 3
  new QuestaoModel(203, "Qual é o coletivo de cães?", [
    RespostaModel.errada("Manada"),
    RespostaModel.errada("Alcateia"),
    RespostaModel.errada("Rebanho"),
    RespostaModel.certa("Matilha"),
  ]),

  // 4
  new QuestaoModel(
    204,
    "Qual é o triângulo que tem todos os lados diferentes?",
    [
      RespostaModel.errada("Equilátero"),
      RespostaModel.errada("Isóceles"),
      RespostaModel.errada("Trapézio"),
      RespostaModel.certa("Escaleno"),
    ]
  ),

  //5

  new QuestaoModel(
    205,
    "Qual montanha se localiza entre a fronteira do Tibet com Nepal?",
    [
      RespostaModel.errada("Monte Branco"),
      RespostaModel.errada("Monte Carlo"),
      RespostaModel.errada("Monte Fuji"),
      RespostaModel.certa("Monte Everest"),
    ]
  ),

  //6

  new QuestaoModel(206, 'O adjetivo de "venoso" está relacionado a:', [
    RespostaModel.errada("Vela"),
    RespostaModel.errada("Vento"),
    RespostaModel.errada("Vênia"),
    RespostaModel.certa("Veia"),
  ]),

  //7

  new QuestaoModel(
    207,
    "Qual personagem do folclore brasileiro tem uma perna só?",
    [
      RespostaModel.errada("Cuca"),
      RespostaModel.errada("Boitatá"),
      RespostaModel.errada("Curupira"),
      RespostaModel.certa("Saci pererê"),
    ]
  ),

  //8

  new QuestaoModel(208, "Que nome se dá à purificação por meio da água?", [
    RespostaModel.errada("Abolição"),
    RespostaModel.errada("Abnegação"),
    RespostaModel.errada("Abrupção"),
    RespostaModel.certa("Ablução"),
  ]),

  //9

  new QuestaoModel(209, "Qual o antônimo de malograr?", [
    RespostaModel.errada("Fracassar"),
    RespostaModel.errada("Desprezar"),
    RespostaModel.errada("Perder"),
    RespostaModel.certa("Conseguir"),
  ]),

  //10

  new QuestaoModel(210, "A compensação com perda é chamada de:", [
    RespostaModel.errada("Déficit"),
    RespostaModel.errada("Indexação"),
    RespostaModel.errada("Indébito"),
    RespostaModel.certa("Indenização"),
  ]),

  //11

  new QuestaoModel(211, 'Quem é o "patrono" do exército brasileiro?', [
    RespostaModel.errada("Barão de Mauá"),
    RespostaModel.errada("Marquês de Pombal"),
    RespostaModel.errada("Marechal Deodoro"),
    RespostaModel.certa("Duque de Caxias"),
  ]),

  //12

  new QuestaoModel(
    212,
    "Quem foi o último presidente do período da ditadura militar no Brasil?",
    [
      RespostaModel.errada("Ernesto Geisel"),
      RespostaModel.errada("Emílio Médici"),
      RespostaModel.errada("Costa e Silva"),
      RespostaModel.certa("João Figueiredo"),
    ]
  ),

  //13

  new QuestaoModel(
    213,
    "Seguindo a sequência do baralho, qual carta vem depois do dez?",
    [
      RespostaModel.errada("Rei"),
      RespostaModel.errada("Ás"),
      RespostaModel.errada("Nove"),
      RespostaModel.certa("Valete"),
    ]
  ),

  //14

  new QuestaoModel(214, "Em que país morreu Carmen Miranda?", [
    RespostaModel.errada("Brasil"),
    RespostaModel.errada("Espanha"),
    RespostaModel.errada("Argentina"),
    RespostaModel.certa("Portugal"),
  ]),

  //15

  new QuestaoModel(215, "Quem compôs o Hino da Independência?", [
    RespostaModel.errada("Carlos Gomes"),
    RespostaModel.errada("Manuel Bandeira"),
    RespostaModel.errada("Castro Alves"),
    RespostaModel.certa("Dom Pedro I"),
  ]),

  // 16

  new QuestaoModel(216, "Em qual parte do corpo se encontra a epiglote?", [
    RespostaModel.errada("Estômago"),
    RespostaModel.errada("Pâncreas"),
    RespostaModel.errada("Rim"),
    RespostaModel.certa("Pescoço"),
  ]),
];

export default questoes;
