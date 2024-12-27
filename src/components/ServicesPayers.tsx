interface ServicesAboutProps {
    svg: JSX.Element; // Changed from `string` to `JSX.Element`
    heading: string;
    description: string;
}

const servicesAbouts: ServicesAboutProps[] = [
    {
        svg: (
            <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M44.5979 31.4417C46.4302 31.7872 48.148 32.5825 49.5968 33.7562C51.0456 34.9299 52.1801 36.4452 52.8984 38.1659C53.6166 39.8866 53.896 41.7588 53.7116 43.6142C53.5271 45.4697 52.8846 47.2502 51.8417 48.7958L80.6625 71.1667C81.6011 70.6804 82.6766 70.5256 83.7143 70.7276C84.752 70.9296 85.6909 71.4763 86.3786 72.2792C87.0664 73.082 87.4626 74.0937 87.5029 75.1501C87.5432 76.2065 87.2252 77.2455 86.6006 78.0983C85.976 78.9512 85.0814 79.5679 84.0622 79.8484C83.0429 80.1288 81.9588 80.0564 80.9858 79.643C80.0128 79.2296 79.2082 78.4995 78.7024 77.5712C78.1967 76.6428 78.0197 75.5708 78.2 74.5292L48.8875 51.775C47.5072 52.7209 45.9332 53.347 44.2803 53.6076C42.6274 53.8683 40.9371 53.7569 39.3327 53.2816C37.7283 52.8064 36.2501 51.9792 35.0058 50.8603C33.7616 49.7414 32.7825 48.3591 32.1401 46.814C31.4977 45.2689 31.2081 43.5999 31.2923 41.9287C31.3765 40.2575 31.8325 38.6261 32.627 37.1534C33.4215 35.6807 34.5345 34.4038 35.8849 33.4157C37.2354 32.4276 38.7893 31.7532 40.4333 31.4417L40.4292 12.5H44.5958L44.5979 31.4417ZM46.2625 42.5C46.2625 42.9925 46.1655 43.4801 45.977 43.9351C45.7886 44.39 45.5124 44.8034 45.1641 45.1517C44.8159 45.4999 44.4025 45.7761 43.9476 45.9646C43.4926 46.153 43.0049 46.25 42.5125 46.25C42.02 46.25 41.5324 46.153 41.0774 45.9646C40.6225 45.7761 40.2091 45.4999 39.8608 45.1517C39.5126 44.8034 39.2364 44.39 39.0479 43.9351C38.8595 43.4801 38.7625 42.9925 38.7625 42.5C38.7625 41.5054 39.1576 40.5516 39.8608 39.8484C40.5641 39.1451 41.5179 38.75 42.5125 38.75C43.5071 38.75 44.4609 39.1451 45.1641 39.8484C45.8674 40.5516 46.2625 41.5054 46.2625 42.5Z" fill="#005AC4" />
                <path d="M57.5625 42.4667C57.5634 39.5848 56.7342 36.7638 55.1739 34.3408C53.6137 31.9179 51.3885 29.9957 48.7646 28.8042V12.7208C57.7 13.5062 62.3417 16.3208 66.4979 20.1729C66.7076 20.3687 66.9132 20.5583 67.1146 20.7417C68.8854 22.3667 70.2937 23.6625 71.0208 25.6L79.8417 49.0833C80.0775 49.7136 80.1572 50.3917 80.0739 51.0595C79.9906 51.7273 79.7468 52.365 79.3633 52.9181C78.9798 53.4711 78.468 53.923 77.8718 54.2352C77.2756 54.5473 76.6126 54.7104 75.9396 54.7104H72.5417V59.5833L56.7604 47.3292C57.2945 45.7644 57.5662 44.1221 57.5646 42.4687M36.2646 28.8458V13.0021C17.5354 15.8208 12.5083 29.7937 12.5083 37.4479C12.5083 49.4625 20.1812 58.7812 23.7792 62.5167V87.5H59.4292V73.9333H68.3729C69.0021 73.9333 69.6021 73.7917 70.1354 73.5417L48.0833 56.4167C44.4386 57.9207 40.3481 57.9293 36.6971 56.4403C33.0461 54.9514 30.1282 52.0848 28.5747 48.4608C27.0212 44.8368 26.9571 40.7469 28.3962 37.076C29.8354 33.4051 32.662 30.4484 36.2646 28.8458Z" fill="#005AC4" />
            </svg>

        ),
        heading: "Payer Call Centre",
        description:
            "Our payer call centre service is designed to provide timely and efficient support for insurance-related inquiries. Whether it's verifying eligibility, following up on unpaid claims, or resolving issues with insurance companies, our trained professionals handle these calls, ensuring clear communication and quick resolutions. This service helps reduce the workload for your internal team while ensuring that payer-related issues are addressed promptly, allowing your practice or organization to focus on patient care or core business functions.",
    },
    {
        svg: (
            <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M72.9167 50C78.9945 50 84.8235 52.4145 89.1212 56.7122C93.4189 61.0099 95.8333 66.8388 95.8333 72.9167C95.8333 78.9946 93.4189 84.8235 89.1212 89.1212C84.8235 93.4189 78.9945 95.8334 72.9167 95.8334C66.8388 95.8334 61.0098 93.4189 56.7121 89.1212C52.4144 84.8235 50 78.9946 50 72.9167C50 66.8388 52.4144 61.0099 56.7121 56.7122C61.0098 52.4145 66.8388 50 72.9167 50ZM62.6 62.6C62.2094 62.9907 61.99 63.5205 61.99 64.073C61.99 64.6254 62.2094 65.1552 62.6 65.5459L69.9708 72.9209L62.6083 80.2792C62.4146 80.4726 62.2609 80.7023 62.156 80.9551C62.0511 81.208 61.997 81.479 61.9968 81.7527C61.9966 82.0265 62.0503 82.2976 62.1549 82.5505C62.2594 82.8035 62.4128 83.0334 62.6063 83.2271C62.7997 83.4208 63.0294 83.5745 63.2822 83.6795C63.535 83.7844 63.806 83.8385 64.0798 83.8387C64.3535 83.8389 64.6246 83.7852 64.8776 83.6806C65.1306 83.576 65.3605 83.4226 65.5542 83.2292L72.9167 75.8667L80.2917 83.2375C80.4838 83.4365 80.7137 83.5952 80.9679 83.7044C81.2221 83.8136 81.4955 83.8711 81.7721 83.8735C82.0487 83.8759 82.323 83.8232 82.5791 83.7184C82.8351 83.6137 83.0677 83.459 83.2633 83.2634C83.4589 83.0678 83.6136 82.8351 83.7184 82.5791C83.8231 82.3231 83.8758 82.0487 83.8734 81.7721C83.871 81.4955 83.8136 81.2221 83.7044 80.9679C83.5952 80.7138 83.4365 80.4839 83.2375 80.2917L75.8667 72.9167L83.2458 65.5417C83.6253 65.1488 83.8353 64.6225 83.8306 64.0763C83.8258 63.53 83.6067 63.0075 83.2205 62.6213C82.8342 62.235 82.3117 62.0159 81.7654 62.0111C81.2192 62.0064 80.6929 62.2164 80.3 62.5959L72.9208 69.9709L65.5458 62.5959C65.1551 62.2053 64.6253 61.9859 64.0729 61.9859C63.5205 61.9859 62.9907 62.2053 62.6 62.5959M45.9125 70.8334H12.5L12.0125 70.8625C10.9579 70.988 9.99107 71.5113 9.30944 72.3257C8.62781 73.1401 8.28288 74.1841 8.34512 75.2442C8.40736 76.3044 8.87207 77.3008 9.6443 78.0298C10.4165 78.7589 11.438 79.1655 12.5 79.1667H46.5583C45.9131 76.4391 45.6953 73.6278 45.9125 70.8334ZM47.9125 62.5H12.5C11.438 62.4989 10.4165 62.0922 9.6443 61.3632C8.87207 60.6341 8.40736 59.6377 8.34512 58.5776C8.28288 57.5174 8.62781 56.4735 9.30944 55.6591C9.99107 54.8447 10.9579 54.3213 12.0125 54.1959L12.5 54.1667H53.375C51.053 56.5824 49.2035 59.408 47.9125 62.5ZM12.5 45.8334C11.438 45.8322 10.4165 45.4255 9.6443 44.6965C8.87207 43.9675 8.40736 42.9711 8.34512 41.9109C8.28288 40.8507 8.62781 39.8068 9.30944 38.9924C9.99107 38.178 10.9579 37.6546 12.0125 37.5292L12.5 37.5H87.5C88.562 37.5012 89.5835 37.9079 90.3557 38.6369C91.1279 39.3659 91.5926 40.3623 91.6549 41.4225C91.7171 42.4827 91.3722 43.5266 90.6906 44.341C90.0089 45.1554 89.0421 45.6788 87.9875 45.8042L87.5 45.8334H12.5ZM87.5 20.8334H12.5L12.0125 20.8625C10.9579 20.988 9.99107 21.5114 9.30944 22.3257C8.62781 23.1401 8.28288 24.1841 8.34512 25.2442C8.40736 26.3044 8.87207 27.3008 9.6443 28.0298C10.4165 28.7589 11.438 29.1655 12.5 29.1667H87.5L87.9875 29.1375C89.0421 29.0121 90.0089 28.4887 90.6906 27.6743C91.3722 26.86 91.7171 25.816 91.6549 24.7559C91.5926 23.6957 91.1279 22.6993 90.3557 21.9702C89.5835 21.2412 88.562 20.8346 87.5 20.8334Z" fill="#005AC4" />
            </svg>


        ),
        heading: "Rejection Management",
        description:
            "Rejection management is a critical aspect of optimizing your revenue cycle. Our team specializes in identifying and addressing claim rejections before they escalate into bigger problems. We analyze rejected claims, determine the root causes, and work to resolve them, reducing the chances of future rejections. By efficiently managing rejections, we help improve your claims acceptance rate, minimize delays in reimbursement, and ensure that your revenue stream remains uninterrupted.",
    },
    {
        svg: (
            <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M30.3792 86.7666L8.33334 91.6666L13.2333 69.6207C10.007 63.5846 8.32372 56.8442 8.33334 49.9999C8.33334 26.9874 26.9875 8.33325 50 8.33325C73.0125 8.33325 91.6667 26.9874 91.6667 49.9999C91.6667 73.0124 73.0125 91.6666 50 91.6666C43.1557 91.6762 36.4153 89.9929 30.3792 86.7666ZM29.1667 49.9999C29.1667 55.5253 31.3616 60.8243 35.2686 64.7313C39.1756 68.6383 44.4747 70.8332 50 70.8332C55.5253 70.8332 60.8244 68.6383 64.7314 64.7313C68.6384 60.8243 70.8333 55.5253 70.8333 49.9999H62.5C62.5 53.3151 61.183 56.4945 58.8388 58.8388C56.4946 61.183 53.3152 62.4999 50 62.4999C46.6848 62.4999 43.5054 61.183 41.1612 58.8388C38.817 56.4945 37.5 53.3151 37.5 49.9999H29.1667Z" fill="#005AC4" />
            </svg>

        ),
        heading: "Chat Support",
        description:
            "Our chat support service provides real-time assistance for both providers and payers, offering a quick and convenient way to resolve issues or answer questions. This service facilitates seamless communication without the need for lengthy phone calls or emails, enabling immediate clarification of claims statuses, policy details, or any other billing-related inquiries. With chat support, you can expect faster issue resolution and a more streamlined communication experience, which helps reduce wait times and enhance overall efficiency.",
    }
];

export const ServicesPayers = () => {
    return (
        <section className="flex flex-col items-center justify-center pt-20">
            <h2 className="underline text-2xl md:text-3xl text-[#4A90E2] font-bold">
                For Payers
            </h2>
            <div className="grid grid-cols-1 gap-6 w-11/12 pt-20">
                {servicesAbouts.map(({ svg, heading, description }, index) => (
                    <div
                        key={index}
                        className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#D1E6FF] to-[#FFFFFF] border border-[#005AC4] shadow-lg rounded-lg p-12"
                    >
                        <div>{svg}</div>
                        <h3 className="text-3xl text-[#005AC4] font-bold pt-6">{heading}</h3>
                        <p className="text-xl pt-6 text-justify">{description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};
