import { ReactNode } from "react";
import { getCourseSidebarData } from "@/app/data/course/get-course-sidebar-data";
import { SiteHeader } from "@/components/sidebar/site-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/sidebar/app-sidebar";
import { CourseSidebar } from "./_components/CourseSidebar";

interface iAppProps {
  params: Promise<{ slug: string }>;
  children: ReactNode;
}

export default async function CourseLayout({ children, params }: iAppProps) {
  const { slug } = await params;

  // Server-side security check and lightweight data fetching
  const course = await getCourseSidebarData();

  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6 px-4 lg:px-6">
              <div className="flex flex-1">
                {/* sidebar - 30% */}
                <div className="w-80 border-r border-border shrink-0">
                  <CourseSidebar course={course.course} />
                </div>

                {/* Main Content - 70% */}
                <div className="flex-1 overflow-hidden">{children}</div>
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
