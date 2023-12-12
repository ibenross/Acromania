// popup.js

document.addEventListener("DOMContentLoaded", function() {
  // Get the background page
  chrome.runtime.getBackgroundPage(function(backgroundPage) {
    if (backgroundPage) {
      // If backgroundPage is defined, get the highlighted text
      const highlightedText = backgroundPage.getHighlightedText();

      // Get the meaning from your dictionary (replace with your dictionary)
      const dictionary = {
        "HTML":
          {
            "type": "acronym",
            "LOB": "enterprise",
            "definition": "Hypertext Markup Language"
          },
        "CSS":
          {
            "type": "acronym",
            "LOB": "enterprise",
            "definition": "Cascading Style Sheets"
          },
        "RISE":
          {
            "type": "acronym",
            "LOB": "GCIB",
            "definition": "Risk Integration & Support Environment"
          },
        "ADSF":
          {
            "type": "acronym",
            "LOB": "GCIB",
            "definition": "Application Development Security Framework"
          },
        "NPT":
          {
            "type": "acronym",
            "LOB": "GCIB",
            "definition": "Non Permitted Technology"
          },
        "4122":
          {
            "type": "AIT",
            "name": "STORM",
            "lead": "Jon Smith"
          },
        "73830":
          {
            "type": "AIT",
            "name": "EQDC",
            "lead": "Jon Smith"
          }
        // Add more key-value pairs as needed
      };

      const entry = dictionary[highlightedText.toUpperCase()];
    
      if (entry) {
        // Check the type and fill out the HTML accordingly
        const resultElement = document.getElementById("result");

        if (entry.type === "acronym") {
          resultElement.innerHTML = `
            <h2><strong>${highlightedText}</strong></h2>
            <p><b>Type:</b> ${entry.type}</p>
            <p><b>LOB:</b> ${entry.LOB}</p>
            <p><b>Definition:</b> ${entry.definition}</p>
          `;
        } else if (entry.type === "AIT") {
          resultElement.innerHTML = `
            <h2><strong>${highlightedText}</strong></h2>
            <p><b>Type:</b> ${entry.type}</p>
            <p<b>>Name:</b> ${entry.name}</p>
            <p><b>Lead:</b> ${entry.lead}</p>
          `;
        } else {
          // Handle other types as needed
          resultElement.textContent = "Unknown type";
        }
      } else if (!entry) {
        // Entry not found in the dictionary
        const resultElement = document.getElementById("result");
        
        const aiDict ={
                "HTML": {
                  "definition": "Hypertext Markup Language"
                },
                "CSS": {
                  "definition": "Cascading Style Sheets"
                },
                "API": {
                  "definition": "Application Programming Interface"
                },
                "JSON": {
                  "definition": "JavaScript Object Notation"
                },
                "AI": {
                  "definition": "Artificial Intelligence"
                },
                "URL": {
                  "definition": "Uniform Resource Locator"
                },
                "HTTP": {
                  "definition": "Hypertext Transfer Protocol"
                },
                "SSL": {
                  "definition": "Secure Sockets Layer"
                },
                "AWS": {
                  "definition": "Amazon Web Services"
                },
                "REST": {
                  "definition": "Representational State Transfer"
                },
                "SQL": {
                  "definition": "Structured Query Language"
                },
                "FTP": {
                  "definition": "File Transfer Protocol"
                },
                "XML": {
                  "definition": "eXtensible Markup Language"
                },
                "URL": {
                  "definition": "Uniform Resource Locator"
                },
                "IoT": {
                  "definition": "Internet of Things"
                },
                "VPN": {
                  "definition": "Virtual Private Network"
                },
                "RAM": {
                  "definition": "Random Access Memory"
                },
                "CPU": {
                  "definition": "Central Processing Unit"
                },
                "HTTPS": {
                  "definition": "Hypertext Transfer Protocol Secure"
                },
                "TCP": {
                  "definition": "Transmission Control Protocol"
                },
                "IP": {
                  "definition": "Internet Protocol"
                },
                "API": {
                    "definition": "Application Programming Interface"
                },
                  "JSON": {
                    "definition": "JavaScript Object Notation"
                },
                  "AI": {
                    "definition": "Artificial Intelligence"
                },
                  "URL": {
                    "definition": "Uniform Resource Locator"
                  },
                  "HTTP": {
                    "definition": "Hypertext Transfer Protocol"
                  },
                  "SSL": {
                    "definition": "Secure Sockets Layer"
                  },
                  "AWS": {
                    "definition": "Amazon Web Services"
                  },
                  "REST": {
                    "definition": "Representational State Transfer"
                  },
                  "SQL": {
                    "definition": "Structured Query Language"
                  },
                  "FTP": {
                    "definition": "File Transfer Protocol"
                  },
                  "XML": {
                    "definition": "eXtensible Markup Language"
                  },
                  "IoT": {
                    "definition": "Internet of Things"
                  },
                  "VPN": {
                    "definition": "Virtual Private Network"
                  },
                  "RAM": {
                    "definition": "Random Access Memory"
                  },
                  "CPU": {
                    "definition": "Central Processing Unit"
                  },
                  "HTTPS": {
                    "definition": "Hypertext Transfer Protocol Secure"
                  },
                  "TCP": {
                    "definition": "Transmission Control Protocol"
                  },
                  "IP": {
                    "definition": "Internet Protocol"
                  },
                  "DNS": {
                    "definition": "Domain Name System"
                  },
                  "HTML": {
                    "definition": "Hypertext Markup Language"
                  },
                  "CSS": {
                    "definition": "Cascading Style Sheets"
                  },
                  "SSL": {
                    "definition": "Secure Sockets Layer"
                  },
                  "TLS": {
                    "definition": "Transport Layer Security"
                  },
                  "SSH": {
                    "definition": "Secure Shell"
                  },
                  "POP": {
                    "definition": "Post Office Protocol"
                  },
                  "SMTP": {
                    "definition": "Simple Mail Transfer Protocol"
                  },
                  "IMAP": {
                    "definition": "Internet Message Access Protocol"
                  },
                  "LAN": {
                    "definition": "Local Area Network"
                  },
                  "WAN": {
                    "definition": "Wide Area Network"
                  },
                  "VPN": {
                    "definition": "Virtual Private Network"
                  },
                  "MAC": {
                    "definition": "Media Access Control"
                  },
                  "HTML5": {
                    "definition": "Hypertext Markup Language version 5"
                  },
                  "CSS3": {
                    "definition": "Cascading Style Sheets version 3"
                  },
                  "CRUD": {
                    "definition": "Create, Read, Update, Delete"
                  },
                  "OOP": {
                    "definition": "Object-Oriented Programming"
                  },
                  "MVC": {
                    "definition": "Model-View-Controller"
                  },
                  "API": {
                    "definition": "Application Programming Interface"
                  },
                  "SaaS": {
                    "definition": "Software as a Service"
                  },
                  "PaaS": {
                    "definition": "Platform as a Service"
                  },
                  "IaaS": {
                    "definition": "Infrastructure as a Service"
                  },
                  "DNS": {
                    "definition": "Domain Name System"
                  },
                  "DDoS": {
                    "definition": "Distributed Denial of Service"
                  },
                  "SSL": {
                    "definition": "Secure Sockets Layer"
                  },
                  "TLS": {
                    "definition": "Transport Layer Security"
                  },
                  "HTTP/2": {
                    "definition": "Hypertext Transfer Protocol version 2"
                  },
                  "HTTPS": {
                    "definition": "Hypertext Transfer Protocol Secure"
                  },
                  "RESTFUL": {
                    "definition": "Representational State Transferful"
                  },
                  "JWT": {
                    "definition": "JSON Web Token"
                  },
                  "OAUTH": {
                    "definition": "Open Authorization"
                  },
                  "CRON": {
                    "definition": "Command Run ON"
                  },
                  "UUID": {
                    "definition": "Universally Unique Identifier"
                  },
                  "GUI": {
                    "definition": "Graphical User Interface"
                  },
                  "CLI": {
                    "definition": "Command Line Interface"
                  },
                  "IDE": {
                    "definition": "Integrated Development Environment"
                  },
                  "API": {
                    "definition": "Application Programming Interface"
                  },
                  "SDK": {
                    "definition": "Software Development Kit"
                  },
                  "GIT": {
                    "definition": "Distributed Version Control System"
                  },
                  "CI/CD": {
                    "definition": "Continuous Integration / Continuous Deployment"
                  },
                  "AGILE": {
                    "definition": "Agile Software Development"
                  },
                  "SCRUM": {
                    "definition": "Scrum Agile Framework"
                  },
                  "KISS": {
                    "definition": "Keep It Simple, Stupid"
                  },
                  "DRY": {
                    "definition": "Don't Repeat Yourself"
                  },
                  "YAGNI": {
                    "definition": "You Aren't Gonna Need It"
                  },
                  "BAAS": {
                    "definition": "Backend as a Service"
                  },
                  "MBAAS": {
                    "definition": "Mobile Backend as a Service"
                  },
                  "DNSSEC": {
                    "definition": "Domain Name System Security Extensions"
                  },
                  "NAT": {
                    "definition": "Network Address Translation"
                  },
                  "VPN": {
                    "definition": "Virtual Private Network"
                  },
                  "IPS": {
                    "definition": "Intrusion Prevention System"
                  },
                  "IDS": {
                    "definition": "Intrusion Detection System"
                  },
                  "PKI": {
                    "definition": "Public Key Infrastructure"
                  },
                  "CORS": {
                    "definition": "Cross-Origin Resource Sharing"
                  },
                  "CAPTCHA": {
                    "definition": "Completely Automated Public Turing test to tell Computers and Humans Apart"
                  },
                  "CRUD": {
                    "definition": "Create, Read, Update, Delete"
                  },
                  "ACID": {
                    "definition": "Atomicity, Consistency, Isolation, Durability"
                  },
                  "BASE": {
                    "definition": "Basically Available, Soft state, Eventually consistent"
                  },
                  "IOT": {
                    "definition": "Internet of Things"
                  },
                  "RFID": {
                    "definition": "Radio-Frequency Identification"
                  },
                  "JSON-RPC": {
                    "definition": "JavaScript Object Notation Remote Procedure Call"
                  },
                  "SOAP": {
                    "definition": "Simple Object Access Protocol"
                  },
                  "WSDL": {
                    "definition": "Web Services Description Language"
                  },
                  "UDDI": {
                    "definition": "Universal Description, Discovery, and Integration"
                  },
                  "RDBMS": {
                    "definition": "Relational Database Management System"
                  },
                  "NOSQL": {
                    "definition": "Not Only SQL"
                  },
                  "DDL": {
                    "definition": "Data Definition Language"
                  },
                  "DML": {
                    "definition": "Data Manipulation Language"
                  },
                  "OLAP": {
                    "definition": "Online Analytical Processing"
                  },
                  "OLTP": {
                    "definition": "Online Transaction Processing"
                  },
                  "BI": {
                    "definition": "Business Intelligence"
                  },
                  "ETL": {
                    "definition": "Extract, Transform, Load"
                  },
                  "CMS": {
                    "definition": "Content Management System"
                  },
                  "CRM": {
                    "definition": "Customer Relationship Management"
                  },
                  "ERP": {
                    "definition": "Enterprise Resource Planning"
                  },
                  "SCM": {
                    "definition": "Supply Chain Management"
                  },
                  "HRM": {
                    "definition": "Human Resource Management"
                  },
                  "DEVOPS": {
                    "definition": "Development and Operations"
                  },
                  "QA": {
                    "definition": "Quality Assurance"
                  },
                  "CDN": {
                    "definition": "Content Delivery Network"
                  },
                  "FAAS": {
                    "definition": "Function as a Service"
                  },
                  "PWA": {
                    "definition": "Progressive Web App"
                  },
                  "NPM": {
                    "definition": "Node Package Manager"
                  },
                  "MVP": {
                    "definition": "Minimum Viable Product"
                  },
                  "DOCKER": {
                    "definition": "Containerization Platform"
                  },
                  "KUBERNETES": {
                    "definition": "Container Orchestration Platform"
                  },
                  "VM": {
                    "definition": "Virtual Machine"
                  },
                  "IAAS": {
                    "definition": "Infrastructure as a Service"
                  },
                  "PAAS": {
                    "definition": "Platform as a Service"
                  },
                  "SAAS": {
                    "definition": "Software as a Service"
                  },
                  "BPMS": {
                    "definition": "Business Process Management Suite"
                  },
                  "GraphQL": {
                    "definition": "Graph Query Language"
                  },
                  "RxJS": {
                    "definition": "Reactive Extensions for JavaScript"
                  },
                  "JWT": {
                    "definition": "JSON Web Token"
                  },
                  "OAuth": {
                    "definition": "Open Authorization"
                  },
                  "SSE": {
                    "definition": "Server-Sent Events"
                  },
                  "WebSockets": {
                    "definition": "Communication Protocol"
                  },
                  "SPA": {
                    "definition": "Single Page Application"
                  },
                  "CMS": {
                    "definition": "Content Management System"
                  },
                  "LMS": {
                    "definition": "Learning Management System"
                  },
                  "ERP": {
                    "definition": "Enterprise Resource Planning"
                  },
                  "CRM": {
                    "definition": "Customer Relationship Management"
                  },
                  "HRM": {
                    "definition": "Human Resource Management"
                  },
                  "WYSIWYG": {
                    "definition": "What You See Is What You Get"
                  },
                  "WAF": {
                    "definition": "Web Application Firewall"
                  },
                  "RPA": {
                    "definition": "Robotic Process Automation"
                  },
                  "MVP": {
                    "definition": "Minimum Viable Product"
                  },
                  "UX": {
                    "definition": "User Experience"
                  },
                  "UI": {
                    "definition": "User Interface"
                  },
                  "CI": {
                    "definition": "Continuous Integration"
                  },
                  "CD": {
                    "definition": "Continuous Deployment"
                  },
                  "CTO": {
                    "definition": "Chief Technology Officer"
                  },
                  "CFO": {
                    "definition": "Chief Financial Officer"
                  },
                  "CEO": {
                    "definition": "Chief Executive Officer"
                  },
                  "CMO": {
                    "definition": "Chief Marketing Officer"
                  },
                  "COO": {
                    "definition": "Chief Operating Officer"
                  },
                  "CTA": {
                    "definition": "Call to Action"
                  },
                  "CTR": {
                    "definition": "Click Through Rate"
                  },
                  "KPI": {
                    "definition": "Key Performance Indicator"
                  },
                  "ROI": {
                    "definition": "Return on Investment"
                  },
                  "B2B": {
                    "definition": "Business to Business"
                  },
                  "B2C": {
                    "definition": "Business to Consumer"
                  },
                  "SMB": {
                    "definition": "Small and Medium-sized Business"
                  },
                  "ISP": {
                    "definition": "Internet Service Provider"
                  },
                  "TCP/IP": {
                    "definition": "Transmission Control Protocol / Internet Protocol"
                  },
                  "LAN": {
                    "definition": "Local Area Network"
                  },
                  "WAN": {
                    "definition": "Wide Area Network"
                  },
                  "MAN": {
                    "definition": "Metropolitan Area Network"
                  },
                  "VPN": {
                    "definition": "Virtual Private Network"
                  },
                  "QOS": {
                    "definition": "Quality of Service"
                  },
                  "SMTP": {
                    "definition": "Simple Mail Transfer Protocol"
                  },
                  "IMAP": {
                    "definition": "Internet Message Access Protocol"
                  },
                  "POP3": {
                    "definition": "Post Office Protocol 3"
                  },
                  "HTML5": {
                    "definition": "Hypertext"
                  }    
        };
        const ai = highlightedText.toUpperCase();
        const aiGeneratedDefinition = dictionary[ai];

        if (aiGeneratedDefinition) {
            resultElement.innerHTML = `
                <h2><strong>${highlightedText}</strong></h2>
                <p><b>AI-Generated Definition:</b> ${aiGeneratedDefinition}</p>
            `;
        }
        else {
            resultElement.textContent = `No information found for '${highlightedText}'`;
        }
      }
    } else {
      // If backgroundPage is undefined, handle the error
      console.error("Background page is undefined. Make sure your background.js is correct.");
    }
  });
});

function generateAIDefinition(acronym) {
    // This is a simple example, replace with more sophisticated logic if needed
    return `Generated definition for ${acronym}`;
}