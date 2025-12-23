import React from 'react';
import { motion } from 'framer-motion';
import { Link, Box } from 'theme-ui';
import { discordLink, githubLink } from '../../constants/social.constant';

export const Footer = () => {
  const AnimatedBox = motion(Box);

  return (
    <AnimatedBox as="footer" variant="layout.footer">
      &copy; {new Date().getFullYear()} by{` `}
      <Link href={discordLink} rel="noopener noreferrer" target="_blank">
        DevSense
      </Link>
      . All rights reserved.
      <br />
      This website is open source on{` `}
      <Link href={githubLink} rel="noopener noreferrer" target="_blank">
        GitHub
      </Link>
      .
    </AnimatedBox>
  );
};
