import mito from "../assets/image/mito.jpg";
import memories from "../assets/image/memories.jpg";
import jaypark from "../assets/image/jay.jpg";
import simon from "../assets/image/sd.jpg";
import action from "../assets/image/action.jpg";
import dprian from "../assets/image/dprian.jpg";
import tree from "../assets/image/tree.jpg";

export type Library = {
  id: string;
  title: string;
  type: string;
  typeTitle: string;
  typeSubTitle?: string;
  image: any;
};

const Libraries: Library[] = [
  {
    id: "1",
    title: "Moodswings in This Order",
    type: "album",
    typeTitle: "앨범",
    typeSubTitle: "DPR IAN",
    image: mito,
  },
  {
    id: "2",
    title: "DPR IAN",
    type: "artist",
    typeTitle: "아티스트",
    image: dprian,
  },
  {
    id: "3",
    title: "Memorize Our Night",
    type: "album",
    typeTitle: "앨범",
    typeSubTitle: "카더가든",
    image: memories,
  },
  {
    id: "4",
    title: "박재범",
    type: "artist",
    typeTitle: "아티스트",
    image: jaypark,
  },
  {
    id: "5",
    title: "사이먼 도미닉",
    type: "artist",
    typeTitle: "아티스트",
    image: simon,
  },
  {
    id: "6",
    title: "action",
    type: "album",
    typeTitle: "앨범",
    typeSubTitle: "DPR LIVE",
    image: action,
  },
  {
    id: "7",
    title: "tree",
    type: "album",
    typeTitle: "앨범",
    typeSubTitle: "카더가든",
    image: tree,
  },
];

export default Libraries;
