import { ArrowUpRight, Clock, Download, FileText } from "@/components/ui/Icons";
import { site } from "@/content/site";

export default function ResumeCard() {
  const { resume } = site;
  return (
    <div className="ring-conic rounded-[1.25rem] p-px">
      <div className="rounded-[calc(1.25rem-1px)] bg-[#0b0b12] p-6">
        <div className="flex items-start gap-4">
          <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-white text-black">
            <FileText className="h-5 w-5" />
          </span>
          <div>
            <h3 className="text-lg font-semibold text-white">Download Resume</h3>
            <p className="mt-1 text-sm leading-relaxed text-muted">Get a copy of my detailed resume with all my experience and skills</p>
          </div>
        </div>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <a href={resume.viewUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary !h-11 flex-1">
            <span className="relative">View resume</span>
            <ArrowUpRight className="btn-arrow relative h-4 w-4" />
          </a>
          <a href={resume.downloadUrl} download={resume.fileName} className="btn btn-ghost !h-11 flex-1">
            <Download className="h-4 w-4" /> Download PDF
          </a>
        </div>
        <p className="mt-4 flex items-center gap-1.5 text-xs text-subtle">
          <Clock className="h-3.5 w-3.5" /> Last updated: {resume.updated}
        </p>
      </div>
    </div>
  );
}
