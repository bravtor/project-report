import "./Style/ReportAdd.css";
import Header from "./Header";
import data from "./data.json"


function ReportId() {
  return (
    <div className="FullPage">
      <Header name="Your report" />

      <div className="Plus">
        <img src="./profils/plus.png" width="60" height="60" alt="" />
      </div>

      <div className="reportId"><Report /></div>
   
    </div>
  );
}

var idx=1
function Report() {
    return (
      <div className="tableA">
        {data.filter((Liste) => Liste.id === idx).map((filtre) => (
          <div className="fullA">
          
  
            <div className="Surname">
              {filtre.details.map((sub) => (
                <div className="SurnameD">
                  <div>{filtre.fonction}</div>
  
                  <div className="info">{sub.info}</div>
                  <div data-status={sub.statut} className="statut">
                    {sub.statut}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }
  


export default ReportId;
