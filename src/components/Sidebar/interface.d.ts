interface GetLessonsQueryResult {
  lessons: {
    id: string;
    title: string;
    slug: string;
    availableAt: string;
    lessonType: "class" | "live";
  }[];
}
