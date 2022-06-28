interface LessonProps {
  title: string;
  lessonSlug: string;
  availableAt: Date;
  type: "class" | "live";
}
