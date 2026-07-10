import { LegalDocumentPage, type LegalSection } from "../components/LegalDocumentPage";

const sections: LegalSection[] = [
  {
    title: "1. Use of Our Services",
    paragraphs: [
      "You agree to use our services only for lawful purposes and in accordance with these Terms of Use. You agree not to use our services:",
    ],
    bullets: [
      "In any way that violates any applicable federal, state, local, or international law or regulation.",
      "For the purpose of exploiting, harming, or attempting to exploit or harm minors in any way by exposing them to inappropriate content or otherwise.",
      "To transmit unsolicited advertising, promotional material, junk mail, chain letters, spam, or similar solicitations without our prior written consent.",
      "To impersonate or attempt to impersonate MedyMatic Business Solutions Pvt. Ltd, one of its employees, another user, or any other person or entity.",
    ],
  },
  {
    title: "2. Intellectual Property Rights",
    paragraphs: [
      "The content on our website and services, including but not limited to text, graphics, logos, images, and software, is the property of MedyMatic Business Solutions Pvt. Ltd and is protected by copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our website without our prior written consent.",
    ],
  },
  {
    title: "3. User Contributions",
    paragraphs: [
      'Our website may contain interactive features that allow users to post, submit, publish, display, or transmit content or materials (collectively, "User Contributions") on or through our website. You represent and warrant that:',
    ],
    bullets: [
      "You own or control all rights in and to your User Contributions and have the right to grant the license granted above to us and our affiliates and service providers.",
      "All of your User Contributions do and will comply with these Terms of Use.",
    ],
  },
  {
    title: "4. Monitoring and Enforcement",
    paragraphs: ["We have the right to:"],
    bullets: [
      "Remove or refuse to post any User Contributions for any or no reason in our sole discretion.",
      "Take any action with respect to any User Contribution that we deem necessary or appropriate in our sole discretion.",
      "Terminate or suspend your access to all or part of our website for any violation of these Terms of Use.",
    ],
  },
  {
    title: "5. Disclaimer of Warranties",
    paragraphs: [
      'Your use of our website and services is at your own risk. Our website and services are provided on an "as is" and "as available" basis without any warranties of any kind, either express or implied.',
    ],
  },
  {
    title: "6. Limitation of Liability",
    paragraphs: [
      "To the fullest extent permitted by law, in no event will MedyMatic Business Solutions Pvt. Ltd, its affiliates, or their licensors, service providers, employees, agents, officers, or directors be liable for damages of any kind arising out of or in connection with your use of our website or services.",
    ],
  },
  {
    title: "7. Governing Law",
    paragraphs: [
      "These Terms of Use are governed by and construed in accordance with the laws of the Government of India, without regard to its conflict of law principles.",
    ],
  },
  {
    title: "8. Changes to These Terms of Use",
    paragraphs: [
      "We may revise and update these Terms of Use from time to time in our sole discretion. All changes are effective immediately when we post them.",
    ],
  },
  {
    title: "9. Contact Us",
    paragraphs: [
      "If you have any questions about these Terms of Use, please contact MedyMatic Business Solutions Pvt. Ltd at info@medymatic.com.",
    ],
  },
];

export function TermsPage() {
  return (
    <LegalDocumentPage
      title="Terms of Use"
      introduction={'Welcome to MedyMatic Business Solutions Pvt. Ltd ("we," "us," or "our"). These Terms of Use govern your use of our website and services. By accessing or using our website, you agree to comply with and be bound by these Terms of Use.'}
      sections={sections}
    />
  );
}
