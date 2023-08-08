import { Text } from "@mantine/core";

const AdvisorData = [
  {
    name: "Theo Salim",
    gradientFrom: "blue",
    gradientTo: "yellow",
    title: `Advisor`,
    description: (
      <Text fz="sm" ta="justify">
        School Background: <br />
        <ul>
          <li>Georgia Tech Scheller College Of Business.</li>
        </ul>
        Investment banking expert with experiences from: <br />
        <ul>
          <li>Goldman Sach</li>
          <li>Brown Brother Capital</li>
          <li>Sovereign Asia Capital</li>
        </ul>
      </Text>
    ),
    icon: "/theo.png",
  },
  {
    name: "Fajar",
    gradientFrom: "blue",
    gradientTo: "yellow",
    title: `Commissioner`,
    description: (
      <Text fz="sm" ta="justify">
        School Background: <br />
        <ul>
          <li>University Of Indonesia, Mechanical Engineering.</li>
        </ul>
        Investment banking expert with experiences from:
        <br />
        <ul>
          <li>Berkah Ventura Investama</li>
          <li>Achmad Zaky Foundation</li>
          <li>Qverse</li>
        </ul>
      </Text>
    ),
    icon: "/fajar.png",
  },
];

export default AdvisorData;
