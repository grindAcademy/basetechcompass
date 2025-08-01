import { getLessonContent } from "@/app/data/course/get-lesson-content";
import { CourseContent } from "./_components/CourseContent";
import { Suspense } from "react";
import { LessonSkeleton } from "./_components/LessonSkeleton";

type Params = Promise<{ lessonSlug: string }>;

export default async function LessonContentPage({
  params,
}: {
  params: Params;
}) {
  const { lessonSlug } = await params;

  return (
    <Suspense fallback={<LessonSkeleton />}>
      <LessonContentLoader lessonSlug={lessonSlug} />
    </Suspense>
  );
}

async function LessonContentLoader({ lessonSlug }: { lessonSlug: string }) {
  const data = await getLessonContent(lessonSlug);
  return <CourseContent data={data} />;
}
