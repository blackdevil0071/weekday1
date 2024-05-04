import React, { useEffect, useState } from 'react';

const JobList = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        const body = JSON.stringify({ "limit": 10, "offset": 0 });
        const requestOptions = {
          method: "POST",
          headers: myHeaders,
          body
        };
        const response = await fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions);
        if (!response.ok) {
          throw new Error('Failed to fetch job listings');
        }
        const data = await response.json();
        console.log(data); 

        setJobs(data.jdList); 

        setLoading(false);
      } catch (error) {
        console.error(error); 

        setError(error.message);
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Job Listings</h1>
      {jobs.map(job => (
        <div key={job.jdUid}>
          <h2>{job.companyName}</h2>
          <h4>{job.jobRole}</h4>
          <p>Estimated Salary : ${job.minJdSalary}-${job.maxJdSalary}</p>
          <p>Location: {job.location}</p>
          <p>Description: {job.jobDetailsFromCompany}</p>
          <p>Experience Required: {job.minExp} - {job.maxExp} years</p>
          <button>Apply</button>
        </div>
      ))}
    </div>
  );
};

export default JobList;
