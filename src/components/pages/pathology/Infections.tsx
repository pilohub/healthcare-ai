import "./detail.css";

export default function Infections() {
  return (
    <div className="detail-page">

      {/* HEADER */}
      <div className="detail-header">
        <h1>🦠 Infections</h1>
        <p>Study of bacterial, viral and fungal diseases affecting the human body</p>
      </div>

      {/* GRID */}
      <div className="detail-grid">

        {/* TYPES */}
        <div className="detail-card">
          <h3>📌 Types of Infections</h3>
          <ul>
            <li>Bacterial → Tuberculosis, Typhoid</li>
            <li>Viral → COVID-19, Influenza</li>
            <li>Fungal → Ringworm, Candidiasis</li>
            <li>Parasitic → Malaria</li>
          </ul>
        </div>

        {/* SYMPTOMS */}
        <div className="detail-card">
          <h3>⚠️ Common Symptoms</h3>
          <ul>
            <li>Fever</li>
            <li>Fatigue & weakness</li>
            <li>Pain or inflammation</li>
            <li>Cough or breathing issues</li>
          </ul>
        </div>

        {/* TRANSMISSION */}
        <div className="detail-card">
          <h3>🔄 Transmission</h3>
          <ul>
            <li>Airborne (cough, sneeze)</li>
            <li>Direct contact</li>
            <li>Contaminated food/water</li>
            <li>Insect bites (mosquito)</li>
          </ul>
        </div>

        {/* TREATMENT */}
        <div className="detail-card">
          <h3>💊 Treatment</h3>
          <ul>
            <li>Antibiotics (for bacteria)</li>
            <li>Antivirals (for viruses)</li>
            <li>Antifungal medicines</li>
            <li>Rest & hydration</li>
          </ul>
        </div>

        {/* PREVENTION */}
        <div className="detail-card">
          <h3>🛡 Prevention</h3>
          <ul>
            <li>Hand hygiene</li>
            <li>Vaccination</li>
            <li>Safe food & water</li>
            <li>Avoid close contact</li>
          </ul>
        </div>

        {/* RISK */}
        <div className="detail-card">
          <h3>⚡ Risk Factors</h3>
          <ul>
            <li>Weak immune system</li>
            <li>Poor hygiene</li>
            <li>Malnutrition</li>
            <li>Chronic diseases</li>
          </ul>
        </div>

      </div>

      {/* INFO BOX */}
      <div className="info-box">
        <h3>💡 Important Note</h3>
        <p>
          Early diagnosis and proper treatment can prevent serious complications
          and spread of infection.
        </p>
      </div>

    </div>
  );
}