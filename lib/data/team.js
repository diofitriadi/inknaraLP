import { Text } from "@mantine/core";

const TeamData = [
  {
    name: "Taufic",
    gradientFrom: "blue",
    gradientTo: "yellow",
    title: `Head Of Business`,
    description: (
      <Text fz="sm" ta="justify">
        School Background: <br />
        <ul>
          <li>University Of Brawijaya, Business Administration</li>
          <li>
            Practical Course, Stanford University, Yale, Michigan, Erasmus
          </li>
        </ul>
        Taufic telah memiliki beragam pengalaman baik di dalam maupun luar
        negeri. Menjadi bagian kunci untuk me-manage business & project baik
        project private, public, and social. Memiliki keahlian mendalam untuk
        menyelesaikan complex problems dan melakukan process efficiency.
      </Text>
    ),
    icon: "/taufic.png",
  },
  {
    name: "Syau",
    gradientFrom: "blue",
    gradientTo: "yellow",
    title: `Head Of Operation`,
    description: (
      <Text fz="sm" ta="justify">
        School Background: <br />
        <ul>
          <li>University Of Brawijaya, Computer Science</li>
          <li>Politeknik Negeri Jakarta, Civil Engineering</li>
        </ul>
        Syau telah memiliki beragam pengalaman pada beragam perusahaan dan
        brand-brand besar di Indonesia. Seperti XL, Garnier, Telkom, dll.
        Menjadi bagian kunci untuk me-manage project dan memiliki keahlian
        mendalam untuk memimpin team dalam jumlah besar dan Civil Engineering.
      </Text>
    ),
    icon: "/syau.png",
  },
];

export default TeamData;
