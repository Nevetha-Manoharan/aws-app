import "./App.css";
import education_logo from "./cch_edu_Logo.png";
import staffing_logo from "./cch-medical-network.jpg";
import allied_logo from "./cch-allied-logo.png";
import { Checklist } from "./components/checklistSection";

function App() {
  const options = [0, 1, 2, 3, 4, 5];
  return (
    <div className="App">
      <div className="content-holder">
        <header className="content-header">
          <div className="image-holder">
            <img src={staffing_logo} alt="staffing_logo" className="logo" />
            <img src={allied_logo} alt="allied_logo" className="logo" />
            <img src={education_logo} alt="education_logo" className="logo" />
          </div>
          <div style={{ display: "flex", marginTop: "3%" }}>
            <div style={{ flex: 1 }}>
              <p>Experience: </p>
              <div style={{ marginLeft: "20%" }}>
                <p>[0] Not Appreciate</p>
                <p>[1] No Experience</p>
                <p>[2] Some Experience</p>
                <p>[3] Intermittent Experience</p>
                <p>[4] Experienced</p>
                <p>[5] Very Experienced</p>
              </div>
            </div>
            <div>
              <p>Adjunct Nursing Facility</p>
            </div>
          </div>
        </header>
        <hr />
        <div className="checklist-section">
          <div className="col left">
            <Checklist title="Assessment/Patient Care" options={options} />
          </div>
          <div className="col right">
            <Checklist
              title="Assessment/Patient Care Continued"
              options={options}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
