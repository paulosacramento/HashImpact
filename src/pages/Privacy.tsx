
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800">
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

            {/* Continue with remaining sections... */}
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
    </div>
  );
};

export default Privacy;
