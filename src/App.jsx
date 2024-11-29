import React from 'react';

class CertificateButton extends React.Component {
  componentDidMount() {
    window.onbeforeunload = function () {
      window.history.forward();
    };

    // You can use this to get the certificate path if needed
    const certPath = window.location.pathname;
  }

  handleDownload = () => {
    // Specify the path for the PDF file you want to download
    const pdfUrl = '/assets/NOC24CS121S954400193.pdf';

    // Create a temporary <a> element to trigger the download
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'NOC24CS121S954400193.pdf'; // Specify the name of the downloaded file
    document.body.appendChild(link);
    link.click(); // Trigger the click event to download the PDF
    document.body.removeChild(link); // Remove the link element after clicking
  };

  render() {
    return (
      <div className="nptel-content">
        <button 
          onClick={this.handleDownload} 
          style={{ 
            color: 'white', 
            backgroundColor: '#3070bf', 
            padding: '10px 20px', 
            borderRadius: '8px', 
            textDecoration: 'none', 
            display: 'inline-block', 
            width: 'auto', 
            position: 'absolute', 
            top: '40%', 
            left: '50%', 
            transform: 'translate(-50%, -50%)', 
            border: 'none' 
          }}
        >
          <a 
            href="/assets/NOC24CS121S954400193.png" 
            target="_blank" 
            rel="noreferrer" 
            style={{ color: 'white', textDecoration: 'none' }}
          >
            Course Certificate
          </a>
        </button>
      </div>
    );
  }
}

export default CertificateButton;
