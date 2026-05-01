import "./contacts.css";

export default function Contacts() {
  return (
    <div className="contact-page">
      <h1 className="contact-title">📞 Important Contacts</h1>

      <div className="contact-list">

        <a href="tel:108" className="contact-row">
          🚑 Ambulance <span>108</span>
        </a>

        <a href="tel:100" className="contact-row">
          👮 Police <span>100</span>
        </a>

        <a href="tel:101" className="contact-row">
          🔥 Fire <span>101</span>
        </a>

        <a href="tel:1091" className="contact-row">
          👩 Women Helpline <span>1091</span>
        </a>

        <a href="tel:1098" className="contact-row">
          🧒 Child Helpline <span>1098</span>
        </a>

        <a href="tel:1066" className="contact-row">
          🧪 Poison Help <span>1066</span>
        </a>

      </div>
    </div>
  );
}