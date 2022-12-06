import _jobs from "../data/jobs.json";

type Job = {
  id: number;
  title: string;
  company: string;
  description: string;
  skillList: string;
  url: string;
  todo: string;
};
// wissen wir nicht die type? => as any[]
const jobs: Job[] = _jobs as any[];

export const PageJobs = () => {
  return (
    <div className="pageJobs">
      <div className="jobs">
        <h2>There are {jobs.length} jobs:</h2>
        {jobs.map((job) => {
          return (
            <div className="job" key={job.id}>
              <div className="title">
                <a href={job.url} target="_blank">
                  {job.title}
                </a>
              </div>
              <div className="company">{job.company}</div>
              <div className="description">{job.description}</div>
              <div className="skills">{job.skillList}</div>
              <div className="todo">{job.todo}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
