export type PostEntity = {
  id: number;
  image?: string;
  description?: string;
  date: string;
  lesson_num: number;
  title: string;
  author: number;
}
const mockPosts: PostEntity[] = [
    {
      id: 1,
      image:
        "https://twt-thumbs.washtimes.com/media/image/2020/04/01/space_new_astronauts_53787_c0-0-4000-2332_s885x516.jpg?c1b9c89c00ce1ca84a8208a5a661db823be13ce1",
      description: "Astronauts are often seen as the modern-day explorers of our time, venturing into the vast unknown of space to expand our understanding of the universe. These brave individuals undergo rigorous training and face numerous challenges, all in the name of science and discovery.",
      date: "2025-09-18",
      lesson_num: 101,
      title: "The Brave Pioneers of Space: A Tribute to Astronauts",
      author: 1,
    },
    {
      id: 2,
      image:
        "https://twt-thumbs.washtimes.com/media/image/2020/04/01/space_new_astronauts_53787_c0-0-4000-2332_s885x516.jpg?c1b9c89c00ce1ca84a8208a5a661db823be13ce1",
      description: "Astronauts are often seen as the modern-day explorers of our time, venturing into the vast unknown of space to expand our understanding of the universe. These brave individuals undergo rigorous training and face numerous challenges, all in the name of science and discovery.",
      date: "2025-09-18",
      lesson_num: 102,
      title: "The Brave Pioneers of Space: A Tribute to Astronauts",
      author: 2,
    },
    {
      id: 3,
      image:
        "https://twt-thumbs.washtimes.com/media/image/2020/04/01/space_new_astronauts_53787_c0-0-4000-2332_s885x516.jpg?c1b9c89c00ce1ca84a8208a5a661db823be13ce1",
      description: "Astronauts are often seen as the modern-day explorers of our time, venturing into the vast unknown of space to expand our understanding of the universe. These brave individuals undergo rigorous training and face numerous challenges, all in the name of science and discovery.",
      date: "2025-09-18",
      lesson_num: 103,
      title: "The Brave Pioneers of Space: A Tribute to Astronauts",
      author: 1,
    },
    {
      id: 4,
      image:
        "https://twt-thumbs.washtimes.com/media/image/2020/04/01/space_new_astronauts_53787_c0-0-4000-2332_s885x516.jpg?c1b9c89c00ce1ca84a8208a5a661db823be13ce1",
      description: "Astronauts are often seen as the modern-day explorers of our time, venturing into the vast unknown of space to expand our understanding of the universe. These brave individuals undergo rigorous training and face numerous challenges, all in the name of science and discovery.",
      date: "2025-09-18",
      lesson_num: 104,
      title: "The Brave Pioneers of Space: A Tribute to Astronauts",
      author: 3,
    },
    {
      id: 5,
      image:
        "https://twt-thumbs.washtimes.com/media/image/2020/04/01/space_new_astronauts_53787_c0-0-4000-2332_s885x516.jpg?c1b9c89c00ce1ca84a8208a5a661db823be13ce1",
      description: "Astronauts are often seen as the modern-day explorers of our time, venturing into the vast unknown of space to expand our understanding of the universe. These brave individuals undergo rigorous training and face numerous challenges, all in the name of science and discovery.",
      date: "2025-09-18",
      lesson_num: 105,
      title: "The Brave Pioneers of Space: A Tribute to Astronauts",
      author: 2,
    },
    {
      id: 6,
      image:
        "https://twt-thumbs.washtimes.com/media/image/2020/04/01/space_new_astronauts_53787_c0-0-4000-2332_s885x516.jpg?c1b9c89c00ce1ca84a8208a5a661db823be13ce1",
      description: "Astronauts are often seen as the modern-day explorers of our time, venturing into the vast unknown of space to expand our understanding of the universe. These brave individuals undergo rigorous training and face numerous challenges, all in the name of science and discovery.",
      date: "2025-09-18",
      lesson_num: 106,
      title: "The Brave Pioneers of Space: A Tribute to Astronauts",
      author: 4,
    },
    {
      id: 7,
      image:
        "https://twt-thumbs.washtimes.com/media/image/2020/04/01/space_new_astronauts_53787_c0-0-4000-2332_s885x516.jpg?c1b9c89c00ce1ca84a8208a5a661db823be13ce1",
      description: "Astronauts are often seen as the modern-day explorers of our time, venturing into the vast unknown of space to expand our understanding of the universe. These brave individuals undergo rigorous training and face numerous challenges, all in the name of science and discovery.",
      date: "2025-09-18",
      lesson_num: 107,
      title: "The Brave Pioneers of Space: A Tribute to Astronauts",
      author: 1,
    },
    {
      id: 8,
      image:
        "https://twt-thumbs.washtimes.com/media/image/2020/04/01/space_new_astronauts_53787_c0-0-4000-2332_s885x516.jpg?c1b9c89c00ce1ca84a8208a5a661db823be13ce1",
      description: "Astronauts are often seen as the modern-day explorers of our time, venturing into the vast unknown of space to expand our understanding of the universe. These brave individuals undergo rigorous training and face numerous challenges, all in the name of science and discovery.",
      date: "2025-09-18",
      lesson_num: 108,
      title: "The Brave Pioneers of Space: A Tribute to Astronauts",
      author: 3,
    },
    {
      id: 9,
      image:
        "https://twt-thumbs.washtimes.com/media/image/2020/04/01/space_new_astronauts_53787_c0-0-4000-2332_s885x516.jpg?c1b9c89c00ce1ca84a8208a5a661db823be13ce1",
      description: "Astronauts are often seen as the modern-day explorers of our time, venturing into the vast unknown of space to expand our understanding of the universe. These brave individuals undergo rigorous training and face numerous challenges, all in the name of science and discovery.",
      date: "2025-09-18",
      lesson_num: 109,
      title: "The Brave Pioneers of Space: A Tribute to Astronauts",
      author: 2,
    },
    {
      id: 10,
      image:
        "https://twt-thumbs.washtimes.com/media/image/2020/04/01/space_new_astronauts_53787_c0-0-4000-2332_s885x516.jpg?c1b9c89c00ce1ca84a8208a5a661db823be13ce1",
      description: "Astronauts are often seen as the modern-day explorers of our time, venturing into the vast unknown of space to expand our understanding of the universe. These brave individuals undergo rigorous training and face numerous challenges, all in the name of science and discovery.",
      date: "2025-09-18",
      lesson_num: 110,
      title: "The Brave Pioneers of Space: A Tribute to Astronauts",
      author: 4,
    },
  ];
export default mockPosts;