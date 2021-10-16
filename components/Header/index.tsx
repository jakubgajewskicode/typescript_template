import { Section, SvgIcon } from './ui';

const Header = ({ setIsModalOpen }: any) => {
  return (
    <Section>
      <h1>Hilton Booking system *****</h1>
      <div tabIndex={0} onClick={() => setIsModalOpen(true)}>
        <SvgIcon>
          <svg
            width="60"
            height="60"
            viewBox="0 0 40 1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g stroke="#000" strokeWidth="2" fill="none" fillRule="evenodd">
              <path d="M1.227 6l1.855 9h10.836l1.855-9H1.227zM8.5 5V0"></path>
            </g>
          </svg>
        </SvgIcon>
      </div>
    </Section>
  );
};

export default Header;
