import styled from 'styled-components';
import { BsGithub, BsTelegram, BsWhatsapp, BsCodeSlash } from 'react-icons/bs';

import { useThemeContext } from '../hooks/useTheme';

import Tooltip from './Tooltip';
import Social from './Social';

const StyledLink = styled.a`
  &:hover {
    color: ${({ theme }) => theme.text.title};
  }
`;

const Footer = () => {
  const { systemTheme } = useThemeContext();
  return (
    <footer className='mb-3 mt-auto'>
      <div className=' flex items-center justify-between '>
        <div className='flex items-center justify-center '>
          <Tooltip tooltipId='Github'>
            <Social
              url='https://github.com/iraphaelfernandes/training_typing'
              tooltipContent='Github'
              tooltipId='Github'
            >
              <BsGithub className='text-2xl' />
            </Social>
          </Tooltip>
          <Tooltip tooltipId='whatsapp'>
            <Social
              url='https://wa.link/bgn9q7'
              tooltipContent='WhatsApp'
              tooltipId='whatsapp'
            >
              <BsWhatsapp className='text-2xl' />
            </Social>
          </Tooltip>

          <Tooltip tooltipId='telegram'>
            <Social
              url='https://t.me/theoneraphael'
              tooltipContent='Telegram'
              tooltipId='telegram'
            >
              <BsTelegram className='text-2xl ' />
            </Social>
          </Tooltip>
        </div>

        <div className='flex items-center gap-2'>
          <BsCodeSlash className='text-xl font-bold' />
          <Tooltip tooltipId='source-code'>
            <StyledLink
              theme={systemTheme}
              href='https://github.com/iraphaelfernandes/training_typing'
              target='_blank'
              rel='noopener noreferrer'
              className='font-mono text-xl hover:underline'
              data-tooltip-content='Give me a star 😊'
              data-tooltip-id='source-code'
            >
              Source Code ⭐
            </StyledLink>
          </Tooltip>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
