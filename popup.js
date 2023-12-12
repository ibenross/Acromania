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
          "ILINK":
          {
            "type": "acronym",
            "LOB": "GCIB",
            "definition": "Investor Link - Deal Central"
          },
          "ECM":
          {
            "type": "acronym",
            "LOB": "GCIB",
            "definition": "Equity Capital Markets"
          },
          "DCM":
          {
            "type": "acronym",
            "LOB": "GCIB",
            "definition": "Debt Capital Markets"
          },
          "LEVFIN":
          {
            "type": "acronym",
            "LOB": "GCIB",
            "definition": "Leverage Finance"
          },
          "LMP":
          {
            "type": "acronym",
            "LOB": "DAS",
            "definition": "Liability Mangement Precedents"
          },
          "LM":
          {
            "type": "acronym",
            "LOB": "DAS",
            "definition": "Liability Mangement"
          },
        "DC":
          {
            "type": "acronym",
            "LOB": "GCIB",
            "definition": "Deal Central"
          },
        "HY":
          {
            "type": "acronym",
            "LOB": "GCIB",
            "definition": "High Yield"
          },
        "FIX":
          {
            "type": "acronym",
            "LOB": "enterprise",
            "definition": "Financial Information Exchange - Internet Protocol"
          },
        "ACH":
          {
            "type": "acronym",
            "LOB": "enterprise",
            "definition": "Automated Clearing House"
          },
        "BCP":
          {
            "type": "acronym",
            "LOB": "enterprise",
            "definition": "Business Continuity Plan"
          },
        "CD":
          {
            "type": "acronym",
            "LOB": "enterprise",
            "definition": "Certificate of Deposit"
          },
        "E-BANKING":
          {
            "type": "acronym",
            "LOB": "enterprise",
            "definition": "Electronic Banking"
          },
        "FACTA":
          {
            "type": "acronym",
            "LOB": "government",
            "definition": "Fair and Accurate Credit Transaction Act"
          },
        "GAO":
          {
            "type": "acronym",
            "LOB": "government",
            "definition": "U.S. Government Accountability Office"
          },
        "HELOC":
          {
            "type": "acronym",
            "LOB": "retail / preferred",
            "definition": "Home Equity Line of Credit"
          },
        "ACH": {
            "type": "acronym",
            "LOB": "general",
            "definition": "Automated Clearing House"
          },
        "AFS": {
            "type": "acronym",
            "LOB": "general",
            "definition": "Available for Sale"
          },
        "ALCO": {
            "type": "acronym",
            "LOB": "general",
            "definition": "Asset/Liability Committee"
          },
        "ALLL": {
            "type": "acronym",
            "LOB": "general",
            "definition": "Allowance for Loan and Lease Losses"
          },
        "ALM": {
            "type": "acronym",
            "LOB": "general",
            "definition": "Asset/Liability Management"
          },
        "AML": {
            "type": "acronym",
            "LOB": "general",
            "definition": "Anti-Money Laundering Act"
          },
        "APO": {
            "type": "acronym",
            "LOB": "general",
            "definition": "Army Post Office"
          },
        "APR": {
            "type": "acronym",
            "LOB": "general",
            "definition": "Annual Percentage Rate"
          },
        "APT": {
            "type": "acronym",
            "LOB": "general",
            "definition": "Asset Protection Trust"
          },
        "APY": {
            "type": "acronym",
            "LOB": "general",
            "definition": "Annual Percentage Yield"
          },
        "ARM": {
            "type": "acronym",
            "LOB": "general",
            "definition": "Access Request Manager"
          },
        "ATM": {
            "type": "acronym",
            "LOB": "general",
            "definition": "Automated Teller Machine"
          },
        "ATR": {
            "type": "acronym",
            "LOB": "general",
            "definition": "Ability to Repay"
          },
        "BCP": {
            "type": "acronym",
            "LOB": "general",
            "definition": "Business Continuity Plan"
          },
        "BOFA": {
            "type": "acronym",
            "LOB": "general",
            "definition": "Bank of America"
          },
        "BHC": {
            "type": "acronym",
            "LOB": "general",
            "definition": "Bank Holding Company"
          },
        "BOLI": {
            "type": "acronym",
            "LOB": "general",
            "definition": "Bank Owned Life Insurance"
          },
        "BSA": {
            "type": "acronym",
            "LOB": "general",
            "definition": "Bank Secrecy Act"
          },
        "CD": {
            "type": "acronym",
            "LOB": "general",
            "definition": "Certificate of Deposit"
          },
        "CDD": {
            "type": "acronym",
            "LOB": "general",
            "definition": "Customer Due Diligence"
          },
        "CERCLA": {
            "type": "acronym",
            "LOB": "general",
            "definition": "Comprehensive Environmental Response, Compensation, and Liability Act"
          },
        "CFPB": {
            "type": "acronym",
            "LOB": "general",
            "definition": "Consumer Finance Protection Bureau"
          },
        "CFR": {
            "type": "acronym",
            "LOB": "general",
            "definition": "Code of Federal Regulations"
          },
        "CFTC": {
            "type": "acronym",
            "LOB": "general",
            "definition": "U.S. Commodity Futures Trading Commission"
          },
        "CIF": {
            "type": "acronym",
            "LOB": "general",
            "definition": "Customer Information File"
          },
        "CIP": {
            "type": "acronym",
            "LOB": "general",
            "definition": "Customer Identification Program"
          },
        "CRA": {
            "type": "acronym",
            "LOB": "general",
            "definition": "Community Reinvestment Act"
          },
        "CRA File": {
            "type": "acronym",
            "LOB": "general",
            "definition": "Community Reinvestment Act File"
          },
        "CTR": {
            "type": "acronym",
            "LOB": "general",
            "definition": "Currency Transaction Report"
          },
        "DDA": {
            "type": "acronym",
            "LOB": "general",
            "definition": "Demand Deposit Account"
          },
        "DIFS": {
            "type": "acronym",
            "LOB": "general",
            "definition": "Department of Insurance and Financial Services"
          },
        "DSC": {
            "type": "acronym",
            "LOB": "general",
            "definition": "Debt Service Coverage"
          },
        "DTI": {
            "type": "acronym",
            "LOB": "general",
            "definition": "Debt-to-Income"
          },
        "E-cash": {
            "type": "acronym",
            "LOB": "general",
            "definition": "Electronic Cash"
          },
        "ECOA": {
            "type": "acronym",
            "LOB": "general",
            "definition": "Equal Credit Opportunity Act"
          },
        "EDD": {
            "type": "acronym",
            "LOB": "general",
            "definition": "Enhanced Due Diligence"
          },
        "EFT": {
            "type": "acronym",
            "LOB": "general",
            "definition": "Electronic Funds Transfer"
          },
        "EIC": {
            "type": "acronym",
            "LOB": "general",
            "definition": "Examiner In Charge"
          },
        "EIN": {
            "type": "acronym",
            "LOB": "general",
            "definition": "Employer Identification Number"
          },
        "EPA": {
            "type": "acronym",
            "LOB": "general",
            "definition": "Environmental Protection Agency"
          },
        "ESA": {
            "type": "acronym",
            "LOB": "general",
            "definition": "Environmental Site Assessment"
          },
        "FACTA": {
            "type": "acronym",
            "LOB": "general",
            "definition": "Fair and Accurate Credit Transaction Act"
          },
        "FAQ": {
            "type": "acronym",
            "LOB": "general",
            "definition": "Frequently Asked Question"
          },
        "FAS": {
            "type": "acronym",
            "LOB": "general",
            "definition": "Financial Accounting Standards"
          },
        "FASB": {
            "type": "acronym",
            "LOB": "general",
            "definition": "Financial Accounting Standards Board"
          },
        "FBI": {
            "type": "acronym",
            "LOB": "general",
            "definition": "Federal Bureau of Investigation"
          },
        "FBO": {
            "type": "acronym",
            "LOB": "general",
            "definition": "Foreign Banking Organization"
          },
        "FCRA": {
            "type": "acronym",
            "LOB": "general",
            "definition": "Fair Credit Reporting Act"
          },
        "FDIC": {
            "type": "acronym",
            "LOB": "general",
            "definition": "Federal Deposit Insurance Corporation"
          },
        "FED": {
            "type": "acronym",
            "LOB": "general",
            "definition": "Federal Reserve Bank"
          },
        "FEDWIRE": {
            "type": "acronym",
            "LOB": "general",
            "definition": "Federal Reserve Bank Funds Service"
          },
        "FFIEC": {
            "type": "acronym",
            "LOB": "general",
            "definition": "Federal Financial Institutions Examination Council"
          },
        "FHC": {
            "type": "acronym",
            "LOB": "general",
            "definition": "Financial Holding Company"
          },
        "FHFA": {
            "type": "acronym",
            "LOB": "general",
            "definition": "Federal Housing Finance Agency"
          },
        "FHLB": {
            "type": "acronym",
            "LOB": "general",
            "definition": "Federal Home Loan Bank"
          },
        "FIL": {
            "type": "acronym",
            "LOB": "general",
            "definition": "Financial Institution Letter"
          },
        "FINCEN": {
            "type": "acronym",
            "LOB": "general",
            "definition": "Financial Crimes Enforcement Network"
          },
        "FIO": {
            "type": "acronym",
            "LOB": "general",
            "definition": "Federal Insurance Office"
          },
        "FIRREA": {
            "type": "acronym",
            "LOB": "general",
            "definition": "Financial Institutions Reform"
          },
        "FMLA": {
            "type": "acronym",
            "LOB": "general",
            "definition": "Family and Medical Leave Act"
          },
        "FMLMC": {
            "type": "acronym",
            "LOB": "general",
            "definition": "Federal Home Loan Mortgage Corporation"
          },
        "FMU": {
            "type": "acronym",
            "LOB": "general",
            "definition": "Financial Market Utility"
          },
        "FOIA": {
            "type": "acronym",
            "LOB": "general",
            "definition": "Freedom of Information Act"
          },
        "FRA": {
            "type": "acronym",
            "LOB": "general",
            "definition": "Federal Reserve Act"
          },
        "FRB": {
            "type": "acronym",
            "LOB": "general",
            "definition": "Federal Reserve Board"
          },
        "FRS": {
            "type": "acronym",
            "LOB": "general",
            "definition": "Federal Reserve System"
          },
        "FSOC": {
            "type": "acronym",
            "LOB": "general",
            "definition": "Financial Stability Oversight Council"
          },
        "FTC": {
            "type": "acronym",
            "LOB": "general",
            "definition": "Federal Trade Commission"
          },
        "GAO": {
            "type": "acronym",
            "LOB": "general",
            "definition": "U.S. Government Accountability Office"
          },
        "GFE": {
            "type": "acronym",
            "LOB": "general",
            "definition": "Good Faith Estimate"
          },
        "GSE": {
            "type": "acronym",
            "LOB": "general",
            "definition": "Government-Sponsored Enterprise"
          },
        "HELOC": {
            "type": "acronym",
            "LOB": "general",
            "definition": "Home Equity Line of Credit"
          },
        "HFS": {
            "type": "acronym",
            "LOB": "general",
            "definition": "Held for Sale"
          },
        "HIDTA": {
            "type": "acronym",
            "LOB": "general",
            "definition": "High Intensity Drug Trafficking Area"
          },
        "HIFCA": {
            "type": "acronym",
            "LOB": "general",
            "definition": "High Intensity Financial Crimes Area"
          },
        "HMDA": {
            "type": "acronym",
            "LOB": "general",
            "definition": "Home Mortgage Disclosure Act"
          },
        "HMDA LAR": {
            "type": "acronym",
            "LOB": "general",
            "definition": "Home Mortgage Disclosure Act Loan Application Register"
          },
        "HOEPA": {
            "type": "acronym",
            "LOB": "general",
            "definition": "Home Ownership and Equity Protection Act"
          },
        "HPML": {
            "type": "acronym",
            "LOB": "general",
            "definition": "High Priced Mortgage Loan"
          },
        "HTM": {
            "type": "acronym",
            "LOB": "general",
            "definition": "Held to Maturity"
          },
        "HUD": {
            "type": "acronym",
            "LOB": "general",
            "definition": "Department of Housing and Urban Development"
          },
        "IAT": {
            "type": "acronym",
            "LOB": "general",
            "definition": "International Automated Clearing House Transaction"
          },
        "IG": {
            "type": "acronym",
            "LOB": "general",
            "definition": "Inspector General"
          },
        "ILC": {
            "type": "acronym",
            "LOB": "general",
            "definition": "Industrial Loan Company"
          },
        "IMF": {
            "type": "acronym",
            "LOB": "general",
            "definition": "International Monetary Fund"
          },
        "IOLTA": {
            "type": "acronym",
            "LOB": "general",
            "definition": "Interest on Lawyers’ Trust Account"
          },
        "IRA": {
            "type": "acronym",
            "LOB": "general",
            "definition": "Individual Retirement Account"
          },
        "IRR": {
            "type": "acronym",
            "LOB": "general",
            "definition": "Interest Rate Risk/Internal Rate of Return"
          },
        "IRS": {
            "type": "acronym",
            "LOB": "general",
            "definition": "Internal Revenue Service"
          },
        "ITM": {
            "type": "acronym",
            "LOB": "general",
            "definition": "Interactive Teller Machines"
          },
        "JHA": {
            "type": "acronym",
            "LOB": "general",
            "definition": "Jack Henry & Associates"
          },
        "KYC": {
            "type": "acronym",
            "LOB": "general",
            "definition": "Know Your Customer"
          },
        "LPO": {
            "type": "acronym",
            "LOB": "general",
            "definition": "Loan Production Office"
          },
        "LRA": {
            "type": "acronym",
            "LOB": "general",
            "definition": "Lender Reserve Account"
          },
        "LTV": {
            "type": "acronym",
            "LOB": "general",
            "definition": "Loan-to-Value"
          },
        "MICR": {
            "type": "acronym",
            "LOB": "general",
            "definition": "Magnetic Ink Character Recognition"
          },
        "MLO": {
            "type": "acronym",
            "LOB": "general",
            "definition": "Mortgage Loans Officer"
          },
        "MLR": {
            "type": "acronym",
            "LOB": "general",
            "definition": "Money Laundering Risk"
          },
        "MMDA": {
            "type": "acronym",
            "LOB": "general",
            "definition": "Money Market Demand Account"
          },
        "MOU": {
            "type": "acronym",
            "LOB": "general",
            "definition": "Memorandum of Understanding"
          },
        "MPP": {
            "type": "acronym",
            "LOB": "general",
            "definition": "Mortgage Purchase Program"
          },
        "MSA": {
            "type": "acronym",
            "LOB": "general",
            "definition": "Metropolitan Statistical Area"
          },
          "MSB": {
            "type": "acronym",
            "LOB": "general",
            "definition": "Money Service Business"
          },
        "MSR": {
            "type": "acronym",
            "LOB": "general",
            "definition": "Mortgage Servicing Rights"
          },
        "MTM": {
            "type": "acronym",
            "LOB": "general",
            "definition": "Mark to Market"
          },
        "NACHA": {
            "type": "acronym",
            "LOB": "general",
            "definition": "The National Automated Clearing House Association"
          },
        "NAICS": {
            "type": "acronym",
            "LOB": "general",
            "definition": "North American Industry Classification System"
          },
        "NBFI": {
            "type": "acronym",
            "LOB": "general",
            "definition": "Non-Bank Financial Institution"
          },
        "NCUA": {
            "type": "acronym",
            "LOB": "general",
            "definition": "National Credit Union Administration"
          },
        "NDIP": {
            "type": "acronym",
            "LOB": "general",
            "definition": "Non-deposit Investment Products"
          },
        "NFIP": {
            "type": "acronym",
            "LOB": "general",
            "definition": "National Flood Insurance Program"
          },
        "NIM": {
            "type": "acronym",
            "LOB": "general",
            "definition": "Net Interest Margin"
          },
        "NMLS": {
            "type": "acronym",
            "LOB": "general",
            "definition": "Nationwide Mortgage Licensing System"
          },
        "NOI": {
            "type": "acronym",
            "LOB": "general",
            "definition": "Net Operating Income"
          },
        "NOW": {
            "type": "acronym",
            "LOB": "general",
            "definition": "Negotiable Order of Withdrawal"
          },
        "NPR": {
            "type": "acronym",
            "LOB": "general",
            "definition": "Notice of Proposed Rulemaking"
          },
        "NSF": {
            "type": "acronym",
            "LOB": "general",
            "definition": "Nonsufficient Funds"
          },
        "OCC": {
            "type": "acronym",
            "LOB": "general",
            "definition": "Office of the Comptroller of the Currency"
          },
        "OD": {
            "type": "acronym",
            "LOB": "general",
            "definition": "Overdraft"
          },
        "ODP": {
            "type": "acronym",
            "LOB": "general",
            "definition": "Overdraft Protection"
          },
        "OEB": {
            "type": "acronym",
            "LOB": "general",
            "definition": "Office of Employee Benefits"
          },
        "OFAC": {
            "type": "acronym",
            "LOB": "general",
            "definition": "Office of Foreign Assets Control"
          },
        "OFR": {
            "type": "acronym",
            "LOB": "general",
            "definition": "Office of Financial Research"
          },
        "OMB": {
            "type": "acronym",
            "LOB": "general",
            "definition": "Office of Management and Budget"
          },
        "OMWI": {
            "type": "acronym",
            "LOB": "general",
            "definition": "Office of Minority and Women Inclusion"
          },
        "OREO": {
            "type": "acronym",
            "LOB": "general",
            "definition": "Other Real Estate Owned"
          },
        "PCA": {
            "type": "acronym",
            "LOB": "general",
            "definition": "Prompt Corrective Action"
          },
        "PCS": {
            "type": "acronym",
            "LOB": "general",
            "definition": "Payment, Clearing, and Settlement"
          },
        "PEP": {
            "type": "acronym",
            "LOB": "general",
            "definition": "Politically Exposed Person"
          },
        "POS": {
            "type": "acronym",
            "LOB": "general",
            "definition": "Point-of-Sale"
          },
        "QFC": {
            "type": "acronym",
            "LOB": "general",
            "definition": "Qualified Financial Contract"
          },
        "QM": {
            "type": "acronym",
            "LOB": "general",
            "definition": "Qualified Mortgage"
          },
        "QRM": {
            "type": "acronym",
            "LOB": "general",
            "definition": "Qualified Residential Mortgage"
          },
        "RBC": {
            "type": "acronym",
            "LOB": "general",
            "definition": "Risk Based Capital"
          },
        "RCC": {
            "type": "acronym",
            "LOB": "general",
            "definition": "Remotely Created Check"
          },
        "RDC": {
            "type": "acronym",
            "LOB": "general",
            "definition": "Remote Deposit Capture"
          },
        "RESPA": {
            "type": "acronym",
            "LOB": "general",
            "definition": "Real Estate Settlement Procedures Act"
          },
        "RFPA": {
            "type": "acronym",
            "LOB": "general",
            "definition": "Right to Financial Privacy Act"
          },
        "ROE": {
            "type": "acronym",
            "LOB": "general",
            "definition": "Report of Examination"
          },
        "ROR": {
            "type": "acronym",
            "LOB": "general",
            "definition": "Right of Rescission"
          },
          "SAFE Act": {
            "type": "acronym",
            "LOB": "general",
            "definition": "Secure and Fair Enforcement for Mortgage Licensing Act"
          },
        "SAR": {
            "type": "acronym",
            "LOB": "general",
            "definition": "Suspicious Activity Report"
          },
        "SBA": {
            "type": "acronym",
            "LOB": "general",
            "definition": "Small Business Administration"
          },
        "SCRA": {
            "type": "acronym",
            "LOB": "general",
            "definition": "Servicemembers Civil Relief Act"
          },
        "SDA": {
            "type": "acronym",
            "LOB": "general",
            "definition": "Savings Deposit Account"
          },
        "SDN": {
            "type": "acronym",
            "LOB": "general",
            "definition": "Specially Designated National"
          },
        "SEC": {
            "type": "acronym",
            "LOB": "general",
            "definition": "U.S. Securities and Exchange Commission"
          },
        "SIFI": {
            "type": "acronym",
            "LOB": "general",
            "definition": "Systemically Important Nonbank Financial Institution"
          },
        "SLHC": {
            "type": "acronym",
            "LOB": "general",
            "definition": "Savings and Loan Holding Company"
          },
        "SOD": {
            "type": "acronym",
            "LOB": "general",
            "definition": "Summary of Deposits"
          },
        "SSN": {
            "type": "acronym",
            "LOB": "general",
            "definition": "Social Security Number"
          },
        "TIL": {
            "type": "acronym",
            "LOB": "general",
            "definition": "Truth in Lending or Truth in Lending Disclosure"
          },
        "TIN": {
            "type": "acronym",
            "LOB": "general",
            "definition": "Taxpayer Identification Number"
          },
        "TISA": {
            "type": "acronym",
            "LOB": "general",
            "definition": "Truth in Savings Act"
          },
        "TM": {
            "type": "acronym",
            "LOB": "general",
            "definition": "Treasury Management"
          },
        "UBPR": {
            "type": "acronym",
            "LOB": "general",
            "definition": "Uniform Bank Performance Report"
          },
        "UCC": {
            "type": "acronym",
            "LOB": "general",
            "definition": "Uniform Commercial Code"
          },
        "UDAAP": {
            "type": "acronym",
            "LOB": "general",
            "definition": "Unfair, Deceptive or Abusive Acts or Practices"
          },
        "YSP": {
            "type": "acronym",
            "LOB": "general",
            "definition": "Yield Spread Premium"
          },
        "4122":
          {
            "type": "AIT",
            "name": "STORM",
            "lead": "Varun Sharma"
          },
        "73830":
          {
            "type": "AIT",
            "name": "EQDC",
            "lead": "Jon Smith"
          },
        "GCMT STORM":
          {
            "type": "AIT NAME",
            "ait": "4122",
            "lead": "Varun Sharma"
          },
        "EQDC":
          {
            "type": "AIT NAME",
            "ait": "73830",
            "lead": "Jon Smith"
          },
        "DEAL CENTRAL":
          {
            "type": "AIT NAME",
            "ait": "71241",
            "lead": "Abdul Mohamed Haniffa"
          },
        "71241":
          {
            "type": "AIT",
            "name": "Deal Central",
            "lead": "Abdul Mohamed Haniffa"
          },
        "MALAYSIA RENTAS ILINK WEB":
          {
            "type": "AIT NAME",
            "ait": "65126",
            "lead": "Murali Sivaraman"
          },
        "65126":
          {
            "type": "AIT",
            "name": "Malaysia Rentas iLINK Web",
            "lead": "Murali Sivaraman"
          },
        "EQUITY DEAL CENTRAL":
          {
            "type": "AIT NAME",
            "ait": "73830",
            "lead": "Natasha Lobo"
          },
        "73830":
          {
            "type": "AIT",
            "name": "Equity Deal Central",
            "lead": "Natasha Lobo"
          },
        "LEVFIN DEAL CENTRAL":
          {
            "type": "AIT NAME",
            "ait": "73841",
            "lead": "Srishti Pithadia"
          },
        "73841":
          {
            "type": "AIT",
            "name": "LevFin Deal Central",
            "lead": "Srishti Pithadia"
          },
        "EDP THOUGHTSPOT":
          {
            "type": "AIT NAME",
            "ait": "73259",
            "lead": "Cheryl Wilson"
          },
        "73259":
          {
            "type": "AIT",
            "name": "EDP ThoughtSpot",
            "lead": "Cheryl Wilson"
          },
        "THOUGHTSPOT CLOUD":
          {
            "type": "AIT NAME",
            "ait": "73983",
            "lead": "Hannah Carmeli"
          },
        "73983":
          {
            "type": "AIT",
            "name": "ThoughtSpot Cloud",
            "lead": "Hannah Carmeli"
          },
        "DEAL ACCOUNTING":
          {
            "type": "AIT NAME",
            "ait": "301",
            "lead": "Varun Sharma"
          },
        "301":
          {
            "type": "AIT",
            "name": "Deal Accounting",
            "lead": "Varun Sharma"
          },
        "DEALER SUPPORT SYSTEM":
          {
            "type": "AIT NAME",
            "ait": "550",
            "lead": "Navneet Singh"
          },
        "550":
          {
            "type": "AIT",
            "name": "Dealer Support System",
            "lead": "Navneet Singh"
          }
        // Add more key-value pairs as needed
      };

      const entry = dictionary[highlightedText.toUpperCase()];
    
      if (entry) {
        // Check the type and fill out the HTML accordingly
        const resultElement = document.getElementById("result");

        
        if (entry.type === "acronym") {
          resultElement.innerHTML = `
            <h2><strong>${highlightedText}: </strong>${entry.definition}</h2>
            <p id="defType">${entry.type}</p>
            <p><b>LOB:</b> ${entry.LOB}</p>
          `;
        } else if (entry.type === "AIT") {
          resultElement.innerHTML = `
            <h2><strong>${highlightedText}:</strong> ${entry.name}</h2>
            <p id="defType">${entry.type}</p>
            <p><b>Lead:</b> ${entry.lead}</p>
          `;
        }
        else if (entry.type === "AIT NAME") {
            resultElement.innerHTML = `
              <h2><strong>${highlightedText}</strong></h2>
              <p id="defType">${entry.type}</p>
              <p><b>AIT Number:</b> ${entry.ait}</p>
              <p><b>Lead:</b> ${entry.lead}</p>
            `;
          }
         else {
          // Handle other types as needed
          resultElement.textContent = "Unknown type";
        }
      } else if (!entry) {
        // Entry not found in the dictionary
        const resultElement = document.getElementById("result");
        
        const aiDict = {
            "HTML":
              {
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
                  },
                  "AFAIK": {
                    "definition": "As Far As I Know"
                  },
                  "AMA": {
                    "definition": "Ask Me Anything"
                  },
                  "BFF": {
                    "definition": "Best Friends Forever"
                  },
                  "DM": {
                    "definition": "Direct Message"
                  },
                  "ETA": {
                    "definition": "Estimated Time of Arrival"
                  },
                  "FAQ": {
                    "definition": "Frequently Asked Questions"
                  },
                  "FB": {
                    "definition": "Facebook"
                  },
                  "FTW": {
                    "definition": "For The Win"
                  },
                  "FOMO": {
                    "definition": "Fear Of Missing Out"
                  },
                  "FWIW": {
                    "definition": "For What It's Worth"
                  },
                  "FYI": {
                    "definition": "For Your Information"
                  },
                  "GTG": {
                    "definition": "Got To Go"
                  },
                  "ICYMI": {
                    "definition": "In Case You Missed It"
                  },
                  "IDK": {
                    "definition": "I Don't Know"
                  },
                  "IMHO": {
                    "definition": "In My Humble Opinion"
                  },
                  "IMO": {
                    "definition": "In My Opinion"
                  },
                  "IRL": {
                    "definition": "In Real Life"
                  },
                  "ISO": {
                    "definition": "In Search Of"
                  },
                  "JK": {
                    "definition": "Just Kidding"
                  },
                  "LMAO": {
                    "definition": "Laughing My Ass Off"
                  },
                  "NSFW": {
                    "definition": "Not Safe For Work"
                  },
                  "OMG": {
                    "definition": "Oh My God"
                  },
                  "ROFL": {
                    "definition": "Rolling On the Floor Laughing"
                  },
                  "SMH": {
                    "definition": "Shaking My Head"
                  },
                  "TBA": {
                    "definition": "To Be Announced"
                  },
                  "TGIF": {
                    "definition": "Thank God It's Friday"
                  },
                  "TL;DR": {
                    "definition": "Too Long; Didn't Read"
                  },
                  "TMI": {
                    "definition": "Too Much Information"
                  },
                  "TTYL": {
                    "definition": "Talk To You Later"
                  },
                  "YOLO": {
                    "definition": "You Only Live Once"
                  },
                  "WIP": {
                    "definition": "Work In Progress"
                  },
                  "WTF": {
                    "definition": "What The F***"
                  },
                  "YMMV": {
                    "definition": "Your Mileage May Vary"
                  },
                  "BTW": {
                    "definition": "By The Way"
                  },
                  "BRB": {
                    "definition": "Be Right Back"
                  },
                  "DIY": {
                    "definition": "Do It Yourself"
                  },
                  "VIP": {
                    "definition": "Very Important Person"
                  },
                  "LOL": {
                    "definition": "Laugh Out Loud"
                  }    
        };
        const ai = highlightedText.toUpperCase();
        const aiGeneratedDefinition = aiDict[ai];

        if (aiGeneratedDefinition) {
            resultElement.innerHTML = `
                <h2><strong>${highlightedText}</strong></h2>
                <p><b>AI-Generated Definition:</b> ${aiGeneratedDefinition.definition}</p>
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