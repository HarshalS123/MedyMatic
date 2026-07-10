import { LegalDocumentPage, type LegalSection } from "../components/LegalDocumentPage";

const sections: LegalSection[] = [
  {
    title: "1. Information We Collect",
    paragraphs: [
      "We may collect personal information that you voluntarily provide to us when you register on the website, express an interest in obtaining information about us or our products and services, participate in activities on the website, or otherwise contact us. The personal information we collect may include:",
    ],
    bullets: [
      "Name",
      "Email address",
      "Phone number",
      "Billing information",
      "Healthcare provider information",
      "Patient information",
    ],
  },
  {
    title: "2. How We Use Your Information",
    paragraphs: ["We use the information we collect in the following ways:"],
    bullets: [
      "To provide, operate, and maintain our website and services.",
      "To improve, personalize, and expand our website and services.",
      "To understand and analyze how you use our website and services.",
      "To develop new products, services, features, and functionality.",
      "To communicate with you directly or through one of our partners, including for customer service, updates, marketing, and promotional purposes.",
      "To process your transactions and manage your orders.",
      "To send you emails.",
      "To find and prevent fraud.",
      "To comply with legal obligations.",
    ],
  },
  {
    title: "3. Sharing Your Information",
    paragraphs: ["We may share your information with third parties in the following situations:"],
    bullets: [
      "With service providers who perform services on our behalf.",
      "With our business partners to offer you certain products, services, or promotions.",
      "To comply with legal obligations.",
      "To protect and defend our rights and property.",
      "With your consent.",
    ],
  },
  {
    title: "4. Data Security",
    paragraphs: [
      "We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.",
    ],
  },
  {
    title: "5. Your Privacy Rights",
    paragraphs: [
      "Depending on your location, you may have the following rights regarding your personal information:",
    ],
    bullets: [
      "The right to access - You have the right to request copies of your personal information.",
      "The right to rectification - You have the right to request that we correct any information you believe is inaccurate or complete information you believe is incomplete.",
      "The right to erasure - You have the right to request that we erase your personal information, under certain conditions.",
      "The right to restrict processing - You have the right to request that we restrict the processing of your personal information, under certain conditions.",
      "The right to object to processing - You have the right to object to our processing of your personal information, under certain conditions.",
      "The right to data portability - You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.",
    ],
  },
  {
    title: "6. Changes to This Privacy Policy",
    paragraphs: [
      "We may update this Privacy Policy from time to time in order to reflect changes to our practices or for other operational, legal, or regulatory reasons. We will notify you of any changes by posting the new Privacy Policy on our website. You are advised to review this Privacy Policy periodically for any changes.",
    ],
  },
  {
    title: "7. Contact Us",
    paragraphs: [
      "If you have any questions about this Privacy Policy, please contact MedyMatic Business Solutions Pvt. Ltd at info@medymatic.com.",
    ],
  },
];

export function PrivacyPolicyPage() {
  return (
    <LegalDocumentPage
      title="Privacy Policy"
      effectiveDate="27 December 2024"
      effectiveDateTime="2024-12-27"
      introduction={'MedyMatic Business Solutions Pvt. Ltd ("we," "us," or "our") is committed to protecting the privacy of our clients and website visitors. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our healthcare billing services.'}
      sections={sections}
    />
  );
}
