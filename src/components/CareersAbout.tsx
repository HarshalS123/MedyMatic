interface CareersAboutProps {
    svg: JSX.Element; // Changed from `string` to `JSX.Element`
    heading: string;
    description: string;
    bottomborder: boolean;
}

const careersAbouts: CareersAboutProps[] = [
    {
        svg: (
            <svg width="60" height="60" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M50 50C57.8041 50 64.875 52.5833 70.0625 56.1958C74.9916 59.6333 79.1666 64.7417 79.1666 70.2375C79.1666 73.2542 77.8791 75.7542 75.85 77.6125C73.9416 79.3667 71.45 80.5042 68.8833 81.2792C63.7541 82.8333 57 83.3333 50 83.3333C43 83.3333 36.2458 82.8333 31.1166 81.2792C28.55 80.5042 26.0583 79.3667 24.1458 77.6125C22.125 75.7583 20.8333 73.2583 20.8333 70.2417C20.8333 64.7458 25.0083 59.6375 29.9375 56.2C35.125 52.5833 42.1958 50 50 50ZM50 58.3333C44 58.3333 38.5708 60.3333 34.7083 63.0292C30.5875 65.9042 29.1666 68.8292 29.1666 70.2375C29.1666 71.5042 30.6333 72.2958 31.9666 72.7958L32.8208 73.0875L33.5291 73.3042C37.4458 74.4875 43.1958 75 50 75C56.2833 75 61.6625 74.5625 65.5333 73.5667L66.8 73.2042L67.5916 72.9542C69.0208 72.4667 70.8333 71.6458 70.8333 70.2375C70.8333 68.8292 69.4125 65.9042 65.2916 63.0292C61.4333 60.3375 56 58.3333 50 58.3333ZM79.1666 54.1667C83.5166 54.1667 87.4666 55.6042 90.3875 57.6375C93.0541 59.5 95.8333 62.5958 95.8333 66.3708C95.8333 71.9333 90.4291 73.925 85.5708 74.6208L84.3208 74.775L83.1166 74.8792L82.5416 74.9125C83.05 73.475 83.3333 71.9125 83.3333 70.2375C83.3309 68.9909 83.1812 67.749 82.8875 66.5375C84.4958 66.4125 85.8166 66.2042 86.8 65.9083C87.2333 65.775 86.8416 65.3667 86.3833 65.0125L85.9375 64.6875L85.6208 64.475C84.3701 63.6214 82.96 63.029 81.475 62.7333C79.8916 59.5667 77.4583 56.825 74.8666 54.6375C76.2787 54.3256 77.7205 54.1677 79.1666 54.1667ZM20.8333 54.1667C22.325 54.1722 23.7583 54.3292 25.1333 54.6375C22.5416 56.825 20.1083 59.5667 18.525 62.7333C17.0399 63.029 15.6298 63.6214 14.3791 64.475L13.8458 64.8417C13.3166 65.225 12.6958 65.7583 13.2 65.9083C14.1833 66.2042 15.5041 66.4167 17.1166 66.5375C16.8175 67.7481 16.6664 68.9905 16.6666 70.2375C16.6666 71.9125 16.95 73.475 17.4583 74.9125L16.2916 74.8292L15.0583 74.7042C10.05 74.0917 4.16663 72.175 4.16663 66.3708C4.16663 62.6 6.94163 59.5 9.61246 57.6375C12.9165 55.3742 16.8284 54.1642 20.8333 54.1667ZM77.0833 29.1667C79.846 29.1667 82.4955 30.2641 84.449 32.2176C86.4025 34.1711 87.5 36.8207 87.5 39.5833C87.5 42.346 86.4025 44.9955 84.449 46.949C82.4955 48.9025 79.846 50 77.0833 50C74.3206 50 71.6711 48.9025 69.7176 46.949C67.7641 44.9955 66.6666 42.346 66.6666 39.5833C66.6666 36.8207 67.7641 34.1711 69.7176 32.2176C71.6711 30.2641 74.3206 29.1667 77.0833 29.1667ZM22.9166 29.1667C25.6793 29.1667 28.3288 30.2641 30.2823 32.2176C32.2358 34.1711 33.3333 36.8207 33.3333 39.5833C33.3333 42.346 32.2358 44.9955 30.2823 46.949C28.3288 48.9025 25.6793 50 22.9166 50C20.154 50 17.5044 48.9025 15.5509 46.949C13.5974 44.9955 12.5 42.346 12.5 39.5833C12.5 36.8207 13.5974 34.1711 15.5509 32.2176C17.5044 30.2641 20.154 29.1667 22.9166 29.1667ZM50 12.5C54.4202 12.5 58.6595 14.2559 61.7851 17.3816C64.9107 20.5072 66.6666 24.7464 66.6666 29.1667C66.6666 33.5869 64.9107 37.8262 61.7851 40.9518C58.6595 44.0774 54.4202 45.8333 50 45.8333C45.5797 45.8333 41.3405 44.0774 38.2148 40.9518C35.0892 37.8262 33.3333 33.5869 33.3333 29.1667C33.3333 24.7464 35.0892 20.5072 38.2148 17.3816C41.3405 14.2559 45.5797 12.5 50 12.5ZM77.0833 37.5C76.5308 37.5 76.0009 37.7195 75.6102 38.1102C75.2195 38.5009 75 39.0308 75 39.5833C75 40.1359 75.2195 40.6658 75.6102 41.0565C76.0009 41.4472 76.5308 41.6667 77.0833 41.6667C77.6358 41.6667 78.1657 41.4472 78.5564 41.0565C78.9471 40.6658 79.1666 40.1359 79.1666 39.5833C79.1666 39.0308 78.9471 38.5009 78.5564 38.1102C78.1657 37.7195 77.6358 37.5 77.0833 37.5ZM22.9166 37.5C22.3641 37.5 21.8342 37.7195 21.4435 38.1102C21.0528 38.5009 20.8333 39.0308 20.8333 39.5833C20.8333 40.1359 21.0528 40.6658 21.4435 41.0565C21.8342 41.4472 22.3641 41.6667 22.9166 41.6667C23.4692 41.6667 23.9991 41.4472 24.3898 41.0565C24.7805 40.6658 25 40.1359 25 39.5833C25 39.0308 24.7805 38.5009 24.3898 38.1102C23.9991 37.7195 23.4692 37.5 22.9166 37.5ZM50 20.8333C47.7898 20.8333 45.6702 21.7113 44.1074 23.2741C42.5446 24.8369 41.6666 26.9565 41.6666 29.1667C41.6666 31.3768 42.5446 33.4964 44.1074 35.0592C45.6702 36.622 47.7898 37.5 50 37.5C52.2101 37.5 54.3297 36.622 55.8925 35.0592C57.4553 33.4964 58.3333 31.3768 58.3333 29.1667C58.3333 26.9565 57.4553 24.8369 55.8925 23.2741C54.3297 21.7113 52.2101 20.8333 50 20.8333Z" fill="#007A59" />
            </svg>
        ),
        heading: "Collaborative Culture",
        description:
            "We foster a team-oriented environment that encourages innovation and knowledge sharing.",
        bottomborder: true
    },
    {
        svg: (
            <svg width="60" height="60" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M50 67.1666V29.6666M50 29.6666C50 17.1666 50 4.66663 79.1666 4.66663C79.1666 17.1666 79.1666 29.6666 50 29.6666ZM16.6666 67.1666H83.3333M75 67.1666L66.6666 96.3333H33.3333L25 67.1666M50 46.3333C50 33.8333 50 21.3333 20.8333 21.3333C20.8333 33.8333 20.8333 46.3333 50 46.3333Z" stroke="#007A59" stroke-width="8" />
            </svg>
        ),
        heading: "Growth Opportunities",
        description:
            "We believe in continuous learning and offer career development programs to help you reach your full potential.",
        bottomborder: true
    },
    {
        svg: (
            <svg width="60" height="60" viewBox="0 0 92 75" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M91.8333 8.33333V66.6667C91.8333 68.9583 91.018 70.9208 89.3875 72.5542C87.7569 74.1875 85.7944 75.0028 83.5 75H71C69.8194 75 68.8305 74.6 68.0333 73.8C67.2361 73 66.8361 72.0111 66.8333 70.8333C66.8305 69.6556 67.2305 68.6667 68.0333 67.8667C68.8361 67.0667 69.825 66.6667 71 66.6667H83.5V8.33333H46V10.4167C46 11.5972 45.6 12.5875 44.8 13.3875C44 14.1875 43.0111 14.5861 41.8333 14.5833C40.6555 14.5806 39.6666 14.1806 38.8666 13.3833C38.0666 12.5861 37.6666 11.5972 37.6666 10.4167V8.125C37.6666 5.90278 38.4652 3.99306 40.0625 2.39583C41.6597 0.798611 43.5694 0 45.7916 0H83.5C85.7916 0 87.7541 0.816667 89.3875 2.45C91.0208 4.08333 91.8361 6.04444 91.8333 8.33333ZM0.166626 37.6042C0.166626 36.2153 0.479126 34.9306 1.10413 33.75C1.72913 32.5694 2.59718 31.5972 3.70829 30.8333L24.5416 15.9375C25.3055 15.3819 26.0875 14.9819 26.8875 14.7375C27.6875 14.4931 28.5027 14.3722 29.3333 14.375C30.1638 14.3778 30.9805 14.5 31.7833 14.7417C32.5861 14.9833 33.3666 15.3819 34.125 15.9375L54.9583 30.8333C56.0694 31.5972 56.9375 32.5694 57.5625 33.75C58.1875 34.9306 58.5 36.2153 58.5 37.6042V66.6667C58.5 68.9583 57.6847 70.9208 56.0541 72.5542C54.4236 74.1875 52.4611 75.0028 50.1666 75H41.8333C39.5416 75 37.5805 74.1847 35.95 72.5542C34.3194 70.9236 33.5027 68.9611 33.5 66.6667V54.1667H25.1666V66.6667C25.1666 68.9583 24.3513 70.9208 22.7208 72.5542C21.0902 74.1875 19.1277 75.0028 16.8333 75H8.49996C6.20829 75 4.24718 74.1847 2.61663 72.5542C0.986071 70.9236 0.169404 68.9611 0.166626 66.6667V37.6042ZM8.49996 37.5V66.6667H16.8333V54.1667C16.8333 51.875 17.65 49.9139 19.2833 48.2833C20.9166 46.6528 22.8777 45.8361 25.1666 45.8333H33.5C35.7916 45.8333 37.7541 46.65 39.3875 48.2833C41.0208 49.9167 41.8361 51.8778 41.8333 54.1667V66.6667H50.1666V37.5L29.3333 22.7083L8.49996 37.5ZM68.9166 25H73.0833C73.6388 25 74.125 24.7917 74.5416 24.375C74.9583 23.9583 75.1666 23.4722 75.1666 22.9167V18.75C75.1666 18.1944 74.9583 17.7083 74.5416 17.2917C74.125 16.875 73.6388 16.6667 73.0833 16.6667H68.9166C68.3611 16.6667 67.875 16.875 67.4583 17.2917C67.0416 17.7083 66.8333 18.1944 66.8333 18.75V22.9167C66.8333 23.4722 67.0416 23.9583 67.4583 24.375C67.875 24.7917 68.3611 25 68.9166 25ZM68.9166 41.6667H73.0833C73.6388 41.6667 74.125 41.4583 74.5416 41.0417C74.9583 40.625 75.1666 40.1389 75.1666 39.5833V35.4167C75.1666 34.8611 74.9583 34.375 74.5416 33.9583C74.125 33.5417 73.6388 33.3333 73.0833 33.3333H68.9166C68.3611 33.3333 67.875 33.5417 67.4583 33.9583C67.0416 34.375 66.8333 34.8611 66.8333 35.4167V39.5833C66.8333 40.1389 67.0416 40.625 67.4583 41.0417C67.875 41.4583 68.3611 41.6667 68.9166 41.6667ZM68.9166 58.3333H73.0833C73.6388 58.3333 74.125 58.125 74.5416 57.7083C74.9583 57.2917 75.1666 56.8056 75.1666 56.25V52.0833C75.1666 51.5278 74.9583 51.0417 74.5416 50.625C74.125 50.2083 73.6388 50 73.0833 50H68.9166C68.3611 50 67.875 50.2083 67.4583 50.625C67.0416 51.0417 66.8333 51.5278 66.8333 52.0833V56.25C66.8333 56.8056 67.0416 57.2917 67.4583 57.7083C67.875 58.125 68.3611 58.3333 68.9166 58.3333Z" fill="#007A59" />
            </svg>
        ),
        heading: "Work-Life Balance",
        description:
            "We understand the importance of balancing professional and personal commitments and offer flexible schedules.",
        bottomborder: true
    },
    {
        svg: (
            <svg width="60" height="60" viewBox="0 0 84 83" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M42 4C21.2896 4 4.5 20.7896 4.5 41.5C4.5 62.2104 21.2896 79 42 79C62.7104 79 79.5 62.2104 79.5 41.5" stroke="#007A59" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M42 22.75C38.2916 22.75 34.6665 23.8497 31.5831 25.9099C28.4996 27.9702 26.0964 30.8986 24.6773 34.3247C23.2581 37.7508 22.8868 41.5208 23.6103 45.1579C24.3338 48.7951 26.1195 52.136 28.7418 54.7582C31.364 57.3805 34.7049 59.1663 38.3421 59.8897C41.9792 60.6132 45.7492 60.2419 49.1753 58.8227C52.6014 57.4036 55.5298 55.0004 57.5901 51.9169C59.6503 48.8335 60.75 45.2084 60.75 41.5M42 41.5L55.125 28.3625" stroke="#007A59" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M55.125 15.3042V28.375H68.3021L79.5 17.125H66.3812V4L55.125 15.3042Z" stroke="#007A59" stroke-width="8" stroke-linejoin="round" />
            </svg>
        ),
        heading: "Competitive Benefits",
        description:
            "We offer competitive salaries and a comprehensive benefits package to ensure our team members are well taken care of.",
        bottomborder: false
    },
];
export const CareersAbout = () => {
    return (
        <section className="flex flex-col items-center justify-center pt-20">
            <h2 className="text-2xl md:text-3xl text-[#004E43] font-bold">
                Why work with us?
            </h2>
            <div className="bg-[#E8FFF0] w-full mt-20">
                <div className="px-2 md:px-36 py-10">
                    {careersAbouts.map(({ svg, heading, description, bottomborder }, index) => (
                        <div
                            key={index}
                            className={`flex flex-row items-center justify-start gap-8 py-2 ${bottomborder ? "border-[#696969] border-b pb-5 mb-5" : ""}`}
                        >
                            <div className="flex items-center justify-center">
                                {svg}
                            </div>
                            <div className="flex flex-col items-start justify-between">
                                <h3 className="text-xl font-bold text-[#007A59] pb-1">
                                    {heading}
                                </h3>
                                <p className="text-sm text-gray-700 pt-1">
                                    {description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="items-center px-10 md:px-20 justify-center bg-gradient-to-r from-[#4A90E2] to-[#59B179]">
                    <div className="p-5 md:p-14 text-white flex flex-col items-center gap-2">
                        <h2 className="text-2xl md:text-3xl font-bold">Join Our Team!</h2>
                        <p className="text-xl text-justify">At MedyMatic, we believe that great work starts with great people. We are always looking for passionate individuals to join our team and help us deliver outstanding services in medical billing, payer support, and revenue cycle management. If you're ready to make an impact and grow with a forward-thinking company, explore our career opportunities below!</p>
                    </div>
                </div>
            </div>

        </section >
    )
}