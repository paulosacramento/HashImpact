import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
const Privacy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 px-0">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <Button variant="outline" className="mb-4 bg-slate-800/50 hover:bg-slate-700/50 border-yellow-500/50 text-yellow-400 hover:text-yellow-300" asChild>
            <Link to="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </Button>
          
          <h1 className="text-4xl font-bold text-white mb-4 bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-400 bg-clip-text text-transparent">
            Terms and Conditions
          </h1>
          <p className="text-gray-300 text-lg">Last updated: June 6, 2025</p>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <div className="bg-slate-800/60 backdrop-blur-sm rounded-2xl border border-yellow-500/20 p-8 text-gray-300 leading-relaxed">
            
            <p className="mb-6">
              These Terms and Conditions ("Terms") govern the use of the HashImpact platform (the "Platform") by mission-driven, Bitcoin-related organizations or groups ("you" or "Organization")—whether formally registered or informally constituted—and by donors ("Donor") who wish to support those Organizations via Bitcoin Lightning payments. By accessing the Platform or sending Donations, you acknowledge and agree to be bound by these Terms. If you do not agree with any part of these Terms, you may not use the Platform.
            </p>

            <h2 className="text-2xl font-bold text-yellow-400 mt-8 mb-4">1. Definitions</h2>
            
            <p className="mb-4">
              <strong className="text-white">Platform:</strong> The HashImpact website and any related services, tools, or applications provided by HashImpact ("we," "us," or "our").
            </p>
            
            <p className="mb-4">
              <strong className="text-white">Organization:</strong> Any mission-driven, Bitcoin-related entity, project, collective, or group—regardless of formal legal registration—whose primary purpose involves Bitcoin (e.g., supporting Bitcoin infrastructure, adoption, education, research, or charitable work funded via Bitcoin) and which submits information to, and appears on, the Platform.
            </p>
            
            <p className="mb-4">
              <strong className="text-white">Donor:</strong> Any individual or entity that uses the Platform to discover and send Bitcoin Lightning–based donations ("Donations") to Organizations.
            </p>
            
            <p className="mb-4">
              <strong className="text-white">Bitcoin-Related:</strong> Activities, projects, or objectives that center on Bitcoin technology, the Lightning Network, Bitcoin education, research, infrastructure development, or charitable uses funded or realized using Bitcoin.
            </p>
            
            <p className="mb-4">
              <strong className="text-white">User Information:</strong> Data provided by an Organization during registration, including but not limited to entity or project name, mission statement, description of Bitcoin-related activities, key participants, contact details, and Lightning Network address ("Lightning Address"). Donors are not required to provide any personal information.
            </p>
            
            <p className="mb-4">
              <strong className="text-white">Background Check:</strong> A reputation-based verification process (which may include identity verification, public or private records review, reference checks, website or social-media audits, and other due-diligence steps) performed by or on behalf of HashImpact to confirm an Organization's legitimacy, non-profit orientation, Bitcoin-related focus, and good standing.
            </p>
            
            <p className="mb-6">
              <strong className="text-white">Lightning Address:</strong> A public identifier through which an Organization or Donor may send or receive Bitcoin Lightning payments.
            </p>

            <h2 className="text-2xl font-bold text-yellow-400 mt-8 mb-4">2. Eligibility and Registration</h2>
            
            <h3 className="text-xl font-semibold text-white mt-6 mb-3">2.1. Organizations</h3>
            
            <h4 className="text-lg font-semibold text-yellow-300 mt-4 mb-2">Eligibility Requirements</h4>
            
            <ul className="list-disc list-inside mb-4 space-y-2">
              <li>Any group, project, or collective whose activities are non-profit–oriented (e.g., charitable, educational, environmental, or humanitarian) and whose primary mission or activities are explicitly Bitcoin-related may apply, whether or not they are formally incorporated or registered.</li>
              <li>Organizations must provide truthful, accurate, and complete information during registration, including a clear description of their Bitcoin-related mission, structure, leadership or key participants, and intended use of Bitcoin funds.</li>
              <li>By submitting an application, the Organization represents it genuinely intends to operate on a non-profit basis in the Bitcoin ecosystem.</li>
              <li>Organizations whose primary activities are not Bitcoin-related, or whose Bitcoin involvement is nominal or speculative, are ineligible.</li>
            </ul>
            
            <h4 className="text-lg font-semibold text-yellow-300 mt-4 mb-2">Registration Process</h4>
            
            <ul className="list-disc list-inside mb-4 space-y-2">
              <li>To appear on the Platform, an Organization must complete the registration form and provide all requested User Information, including a valid Lightning Address for receiving Donations.</li>
              <li>The Organization should supply any available documentation or references—such as a website, social-media profiles, letters of support, or project reports—that demonstrate both its non-profit orientation and Bitcoin-related activities.</li>
              <li>Upon submission, HashImpact will perform a reputation-based Background Check (Section 3) to confirm non-profit orientation, Bitcoin-related focus, and legitimacy before approving the Organization's profile.</li>
              <li>HashImpact reserves the right to approve or reject any registration at its sole discretion, without assigning a reason.</li>
              <li><strong className="text-white">Removal of Listing:</strong> HashImpact may remove any Organization's listing from the Platform at any time, with or without notice or explanation, even after approval.</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">2.2. Donors</h3>
            
            <h4 className="text-lg font-semibold text-yellow-300 mt-4 mb-2">Eligibility</h4>
            
            <ul className="list-disc list-inside mb-4 space-y-2">
              <li>Any individual or entity capable of holding, sending, or receiving Bitcoin via Lightning Network may act as a Donor on the Platform.</li>
              <li>Donors must comply with all applicable laws and regulations in their jurisdiction concerning cryptocurrency holdings and transfers.</li>
              <li>By sending a Donation, the Donor represents they have the right and capacity to use the Lightning Address and Bitcoin funds provided.</li>
            </ul>
            
            <h4 className="text-lg font-semibold text-yellow-300 mt-4 mb-2">No Registration or Personal Data Required</h4>
            
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>Donors are not required to register, log in, or provide any personal information to view Organization listings or send Donations.</li>
              <li>HashImpact does not collect, store, or track any identifying information about Donors.</li>
            </ul>

            <h2 className="text-2xl font-bold text-yellow-400 mt-8 mb-4">3. Background Check</h2>
            
            <h3 className="text-xl font-semibold text-white mt-6 mb-3">Purpose and Scope</h3>
            
            <p className="mb-4">
              <strong className="text-white">Reputation-Based Approach:</strong> HashImpact conducts a reputation-based Background Check to evaluate Organizations' Bitcoin-related track record. This may include:
            </p>
            
            <ul className="list-disc list-inside mb-4 space-y-2">
              <li>Reviewing online presence (website, social media, GitHub, or other code repositories).</li>
              <li>Checking references from previous collaborators, funders, or community members.</li>
              <li>Examining published reports, whitepapers, or public filings.</li>
              <li>Consulting public sanction lists and adverse media.</li>
            </ul>
            
            <p className="mb-6">
              <strong className="text-white">Limitations:</strong> HashImpact does its best to assess Organizations using publicly available evidence and references, but cannot guarantee that an Organization will act in good faith or use funds as described.
            </p>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">Consent</h3>
            
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>By applying, the Organization consents to HashImpact's review of both publicly available and privately furnished information for Background Check purposes.</li>
              <li>The Organization represents it has obtained all necessary consents from its representatives (e.g., project leads, board members) for the Background Check.</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">Outcome</h3>
            
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>If the Background Check raises serious concerns—such as evidence of prior misuse of funds, ongoing legal or regulatory actions, or fraudulent representations—HashImpact may refuse or revoke approval at any time.</li>
              <li>No refunds or compensation shall be due to the Organization if registration is denied or revoked based on Background Check findings.</li>
              <li><strong className="text-white">No Warranty:</strong> HashImpact does not guarantee the accuracy or completeness of any information about Organizations. Donors should conduct their own due diligence before contributing.</li>
            </ul>

            <h2 className="text-2xl font-bold text-yellow-400 mt-8 mb-4">4. Organizational Information and Public Display</h2>
            
            <h3 className="text-xl font-semibold text-white mt-6 mb-3">Representation of Information</h3>
            
            <ul className="list-disc list-inside mb-4 space-y-2">
              <li>By registering, the Organization authorizes HashImpact to display all submitted User Information (e.g., name, mission, Bitcoin-related activities, key participants, Lightning Address) on the Platform, accessible to visitors worldwide.</li>
              <li>The Organization guarantees it holds all necessary rights to share the information and that publication will not infringe third-party rights.</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">Accuracy and Updates</h3>
            
            <ul className="list-disc list-inside mb-4 space-y-2">
              <li>The Organization is responsible for ensuring its displayed information remains accurate and up to date, including any changes in mission, Bitcoin-related initiatives, leadership, contact details, or Lightning Address.</li>
              <li>If any material fact changes (e.g., dissolution of the group, change of Lightning Address), the Organization must notify HashImpact.</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">Lightning Address Publication</h3>
            
            <ul className="list-disc list-inside mb-4 space-y-2">
              <li>To receive Bitcoin Lightning Donations from Donors via the Platform, the Organization agrees to have its Lightning Address publicly listed.</li>
              <li>HashImpact is not responsible for unauthorized use of the Lightning Address or any payments sent to an incorrect address. The Organization is solely responsible for monitoring its Lightning wallet.</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">Right to Modify or Remove Information</h3>
            
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>HashImpact may, at any time and for any reason, modify, suspend, or remove any portion of an Organization's publicly displayed information—including the Lightning Address—without notice or explanation.</li>
            </ul>

            <h2 className="text-2xl font-bold text-yellow-400 mt-8 mb-4">5. Donor Responsibilities & Disclosures</h2>
            
            <h3 className="text-xl font-semibold text-white mt-6 mb-3">Donor Conduct and Awareness</h3>
            
            <ul className="list-disc list-inside mb-4 space-y-2">
              <li><strong className="text-white">Sole Responsibility:</strong> Donors acknowledge they are solely responsible for deciding whether to make, continue, or stop any Donations. HashImpact does not endorse or guarantee any Organization's actions, and Donors remain free to cease contributions at any time.</li>
              <li><strong className="text-white">Independent Judgment:</strong> Donors should exercise independent judgment and research before sending Bitcoin. HashImpact does not provide investment, tax, legal, or financial advice.</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">Donation Process</h3>
            
            <ul className="list-disc list-inside mb-4 space-y-2">
              <li>Donors will select an Organization's Lightning Address listed on its profile and send any amount of Bitcoin via Lightning Network.</li>
              <li>HashImpact acts solely as an information provider and does not intermediate, custody, or process the funds. Donations are peer-to-peer transfers directly from the Donor's Lightning wallet to the Organization's Lightning wallet.</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">Irreversibility and Risk</h3>
            
            <ul className="list-disc list-inside mb-4 space-y-2">
              <li>Bitcoin Lightning transactions are irreversible. Once a Donation is sent, it cannot be reversed, refunded, or cancelled by HashImpact or by the Organization.</li>
              <li>Donors are aware that the Organization may misuse funds, act contrary to its stated purpose, or cease operating at any time. HashImpact disclaims any liability for such misuse or misconduct.</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">Tax and Legal Considerations</h3>
            
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>Donors are solely responsible for determining the tax and legal implications of their Donations in their jurisdiction. HashImpact is not a tax advisor and does not provide legal or financial advice.</li>
              <li>Donors should consult their own tax professionals regarding the deductible status of Bitcoin donations or reporting requirements.</li>
            </ul>

            <h2 className="text-2xl font-bold text-yellow-400 mt-8 mb-4">6. Use of the Platform & Prohibited Conduct</h2>
            
            <h3 className="text-xl font-semibold text-white mt-6 mb-3">Permitted Use</h3>
            
            <ul className="list-disc list-inside mb-4 space-y-2">
              <li>Organizations may use the Platform to share mission statements, detailed descriptions of Bitcoin-related projects, request Bitcoin-denominated funding via Lightning Address, and connect with Donors.</li>
              <li>Donors may use the Platform to discover, evaluate, and send Bitcoin Lightning Donations to Organizations without providing personal information.</li>
              <li>All users agree to comply with local, national, and international laws regarding cryptocurrency transactions and non-profit or charitable activity.</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">Prohibited Activities</h3>
            
            <p className="mb-4">
              <strong className="text-white">You shall not:</strong>
            </p>
            
            <ul className="list-disc list-inside mb-4 space-y-2">
              <li>Submit false, misleading, or fraudulent information as an Organization or Donor.</li>
              <li>Impersonate any person or misrepresent your affiliation, non-profit orientation, or Bitcoin-related role.</li>
              <li>Use the Platform to promote hate speech, violence, illegal activities, or content that infringes on others' rights.</li>
              <li>Attempt to hack, reverse engineer, or otherwise tamper with the Platform's security or features.</li>
              <li>Harvest or collect information about other users or Organizations for unauthorized purposes.</li>
              <li>Solicit or accept Donations in currencies other than Bitcoin if representing an Organization on the Platform.</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">Consequences of Prohibited Conduct</h3>
            
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>Violation of these Terms may result in immediate suspension or removal from the Platform, with or without notice.</li>
              <li>HashImpact reserves the right to report any illicit or illegal activities to law enforcement and regulatory authorities.</li>
            </ul>

            <h2 className="text-2xl font-bold text-yellow-400 mt-8 mb-4">7. Payments and Lightning Addresses</h2>
            
            <h3 className="text-xl font-semibold text-white mt-6 mb-3">Payment Mechanism</h3>
            
            <ul className="list-disc list-inside mb-4 space-y-2">
              <li>All Donations facilitated through the Platform occur over the Bitcoin Lightning Network, using the Lightning Address provided by the Organization.</li>
              <li>HashImpact does not custody, process, or intermediate any funds; all funds transmitted via Lightning are sent directly from the Donor's wallet to the Organization's wallet.</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">Fees</h3>
            
            <ul className="list-disc list-inside mb-4 space-y-2">
              <li>HashImpact does not charge any listing or platform fees for Organizations or Donors. However, individual payment processors or Lightning node operators may apply network fees when sending or receiving Lightning payments.</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">Disclaimers</h3>
            
            <p className="mb-4">
              <strong className="text-white">HashImpact is not responsible for:</strong>
            </p>
            
            <ul className="list-disc list-inside mb-4 space-y-2">
              <li>Technical issues on the Lightning Network or Bitcoin blockchain.</li>
              <li>Failed or incorrect Donations due to user error (e.g., mistyped Lightning Address).</li>
              <li>Volatility of Bitcoin's price or exchange rates between Bitcoin and fiat currencies.</li>
            </ul>
            
            <p className="mb-4">
              <strong className="text-white">No Liability for Misuse by Organizations:</strong> HashImpact endeavors to vet Organizations via a reputation-based approach, but cannot guarantee they will use funds responsibly. HashImpact is not liable for any Organization's misuse of funds, nor for any consequences resulting from Donors' decisions to contribute.
            </p>
            
            <p className="mb-4">
              <strong className="text-white">Donor Responsibility:</strong> Donors are solely responsible for deciding to make, continue, or stop any Donations. HashImpact disclaims all liability for contributions that Donors make to Organizations.
            </p>
            
            <p className="mb-6">
              The Organization indemnifies and holds HashImpact harmless from any claim, liability, loss, or expense arising from payment disputes or errors.
            </p>

            <h2 className="text-2xl font-bold text-yellow-400 mt-8 mb-4">8. Intellectual Property</h2>
            
            <h3 className="text-xl font-semibold text-white mt-6 mb-3">Open Source Software (MIT License)</h3>
            
            <p className="mb-6">
              The core Platform software—its source code, libraries, and associated scripts—is made available under the MIT License. You are free to view, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the software, provided that you include the original MIT License text and copyright notice in all substantial portions of the software.
            </p>

            <h2 className="text-2xl font-bold text-yellow-400 mt-8 mb-4">9. Confidentiality & Data Security</h2>
            
            <h3 className="text-xl font-semibold text-white mt-6 mb-3">Confidential Information</h3>
            
            <ul className="list-disc list-inside mb-4 space-y-2">
              <li>Confidential Information includes (but is not limited to) any non-public business, financial, or technical information disclosed by either party during the Background Check or Platform interactions (e.g., budgets, internal Bitcoin infrastructure plans).</li>
              <li>Each party agrees to keep the other's Confidential Information confidential and to use it solely to fulfill its obligations under these Terms.</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">Data Security Measures</h3>
            
            <p className="mb-4">
              HashImpact implements reasonable administrative, technical, and physical safeguards to protect User Information—both Organizations' and any limited metadata from Donations—against unauthorized access, disclosure, or misuse. However, no system is completely secure, and we cannot guarantee absolute security.
            </p>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">Breach Notification</h3>
            
            <p className="mb-6">
              In the event of a data breach affecting Users' personal data, HashImpact will notify affected parties and relevant authorities in accordance with applicable laws and regulations.
            </p>

            <h2 className="text-2xl font-bold text-yellow-400 mt-8 mb-4">10. Privacy Considerations</h2>
            
            <p className="mb-6">
              HashImpact commits to protecting the privacy of Organizations and maintaining that Donors remain anonymous. This section summarizes how we handle any data on the Platform.
            </p>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">10.1. Information We Collect</h3>
            
            <h4 className="text-lg font-semibold text-yellow-300 mt-4 mb-2">Organizations:</h4>
            
            <p className="mb-4">
              We collect Organization-provided data: name, mission statement, description of Bitcoin-related activities, website or social-media links (if available), leadership or key participant contact details (names, email addresses), Lightning Address, and any additional onboarding information (e.g., letters of support, project reports).
            </p>
            
            <h4 className="text-lg font-semibold text-yellow-300 mt-4 mb-2">Donors:</h4>
            
            <p className="mb-6">
              HashImpact does not collect, store, or track any personal information about Donors.
            </p>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">10.2. How We Use Information</h3>
            
            <h4 className="text-lg font-semibold text-yellow-300 mt-4 mb-2">Organizations:</h4>
            
            <ul className="list-disc list-inside mb-4 space-y-2">
              <li>To verify Bitcoin-related non-profit orientation, display Organization profiles, and facilitate receipt of Bitcoin Lightning Donations.</li>
              <li>To send registration confirmations, security alerts, and other transactional messages.</li>
            </ul>
            
            <h4 className="text-lg font-semibold text-yellow-300 mt-4 mb-2">Donors:</h4>
            
            <p className="mb-4">
              Since no personal data is collected, HashImpact does not use donor information. Donations occur peer-to-peer on Lightning.
            </p>
            
            <h4 className="text-lg font-semibold text-yellow-300 mt-4 mb-2">Platform Improvement:</h4>
            
            <p className="mb-4">
              Usage patterns from Organizations and anonymous analytics help us troubleshoot issues and improve the Platform.
            </p>
            
            <h4 className="text-lg font-semibold text-yellow-300 mt-4 mb-2">Legal Compliance:</h4>
            
            <p className="mb-6">
              To comply with legal obligations, respond to lawful requests from public authorities, or establish, exercise, or defend legal claims.
            </p>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">10.3. How We Share Information</h3>
            
            <ul className="list-disc list-inside mb-4 space-y-2">
              <li><strong className="text-white">Public Display:</strong> The Organization's profile information (e.g., mission statement, Bitcoin-related activities, Lightning Address) will be publicly accessible on the Platform.</li>
              <li><strong className="text-white">Service Providers:</strong> We may share limited Organization data with third-party service providers who perform functions on our behalf (e.g., hosting, analytics, Background Check vendors). These providers are contractually obligated to protect your data and use it only for specified purposes.</li>
              <li><strong className="text-white">Legal Disclosures:</strong> We may disclose information if required by law, regulation, legal process, or government request, or to protect our rights, privacy, safety, or property.</li>
              <li><strong className="text-white">Donor Anonymity:</strong> We do not share any donor-related data with any third parties.</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">10.4. Data Retention</h3>
            
            <ul className="list-disc list-inside mb-4 space-y-2">
              <li>We retain Organization data only as long as necessary to fulfill the purposes outlined in this Policy, including ongoing compliance, legal obligations, dispute resolution, and enforcement of our agreements.</li>
              <li>Donor information is not stored; any blockchain records remain in the Bitcoin Lightning ecosystem and are not held by HashImpact.</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">10.5. Your Rights</h3>
            
            <p className="mb-4">
              Subject to applicable law, Organizations may have the right to:
            </p>
            
            <ul className="list-disc list-inside mb-4 space-y-2">
              <li><strong className="text-white">Access:</strong> Request a copy of the personal data we hold about organization representatives.</li>
              <li><strong className="text-white">Rectify:</strong> Correct inaccuracies in personal data.</li>
              <li><strong className="text-white">Erase:</strong> Request deletion of personal data in certain circumstances.</li>
              <li><strong className="text-white">Restrict Processing:</strong> Request that we limit how we use personal data.</li>
              <li><strong className="text-white">Data Portability:</strong> Obtain a copy of personal data in a structured, machine-readable format.</li>
              <li><strong className="text-white">Object:</strong> Object to processing for direct marketing or profiling.</li>
            </ul>
            
            <p className="mb-6">
              To exercise these rights, please contact privacy@hashimpact.org. We may require verification of identity before processing such requests.
            </p>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">10.6. Children's Privacy</h3>
            
            <p className="mb-6">
              The Platform is not intended for organizations or individuals under the age of 16. We do not knowingly collect personal data from minors.
            </p>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">10.7. International Data Transfers</h3>
            
            <p className="mb-6">
              Because HashImpact operates globally, personal data collected may be stored and processed outside your country of residence. By using the Platform, you consent to such transfers. We take steps to ensure data receives adequate protection per applicable laws.
            </p>

            <div className="text-center mt-12 pt-8 border-t border-gray-600">
              <p className="text-gray-400 mb-4">
                This is a condensed version of our terms. For the complete terms and conditions, please contact us.
              </p>
              <div className="space-y-2 text-sm text-gray-400">
                <p>HashImpact Team</p>
                <p>Email: hashimpact@proton.me</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>;
};
export default Privacy;