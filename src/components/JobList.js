import React, { useEffect, useState } from "react";
import './JobList.css'
const JobList = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        const body = JSON.stringify({ limit: 10, offset: 0 });
        const requestOptions = {
          method: "POST",
          headers: myHeaders,
          body,
        };
        const response = await fetch(
          "https://api.weekday.technology/adhoc/getSampleJdJSON",
          requestOptions
        );
        if (!response.ok) {
          throw new Error("Failed to fetch job listings");
        }
        const data = await response.json();
        console.log(data); // Check the structure of the data here

        // Assuming the jobs array is directly in the data object
        setJobs(data.jdList); // Update the state with the jdList array

        setLoading(false);
      } catch (error) {
        console.error(error); // Log any errors that occur during the API request

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
    <div className="job-list-container">
      {jobs.map((job) => (
        <div key={job.jdUid} className="job-card">
          <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-6 MuiGrid-grid-lg-4 card-body-grid-parent css-170ukis">
            <div className="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 MuiCard-root card-body css-9zecu3">
              <p className="funding-info funding-info-dummy"></p>
              <div className="MuiCardContent-root css-1go74o8">
              <div className="MuiBox-root css-1ewacfc">
                    <p className="MuiTypography-root MuiTypography-body1 css-9spv16">
                      ⏳ Posted 3 days ago
                    </p>
                  </div>
                <div className="company-info">
                  <img
                    className="company-logo"
                    src={job.logoUrl}
                    alt="logo"
                  />
                  <div>
                    <div className="info-container">
                      <h3 className="MuiBox-root css-rulwqv">
                        {job.companyName}
                      </h3>
                      <h2>{job.jobRole}</h2>
                      <p>{job.location}</p>
                    </div>

                  </div>
                </div>

                
          <p className="MuiTypography-root MuiTypography-body2 card-salary css-361mbm">Estimated Salary: ${job.minJdSalary}-{job.maxJdSalary}<span aria-label="Offered salary range" className=""> ✅</span><br /></p>
          <div className="jd-link-container">
            <div className="hard-lang-container"></div>
          </div>


          <div className="MuiBox-root css-56jvne">
            <div className="MuiBox-root css-0">
              <p className="MuiTypography-root MuiTypography-body1 css-1hw7dw8">About Company:</p>
              <div className="MuiBox-root css-1m7bgf1">
                <p><span style={{ fontWeight: 400 }}>{job.jobDetailsFromCompany}&nbsp;</span></p>
                <p>&nbsp;</p>
              </div>
             </div>
          </div>

                <div className="info-container poc-info-container">
                  <p style={{ marginTop: "10px" }}>Minimum Experience</p>
                  <p>{job.minExp}</p>
                </div>

                <div className="MuiBox-root css-q40y17">
                  <button
                    className="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-colorPrimary MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-colorPrimary css-1dyt7kc"
                    type="button"
                    id="custom-btn"
                    style={{
                      width: "100%",
                      backgroundColor: "rgb(85, 239, 196)",
                      color: "rgb(0, 0, 0)",
                      fontWeight: "500",
                      padding: "8px 18px",
                    }}
                  >
                    ⚡ Easy Apply
                    <span className="MuiTouchRipple-root css-w0pj6f"></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default JobList;
