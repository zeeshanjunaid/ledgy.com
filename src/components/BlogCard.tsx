import React, { ReactNode } from "react";

import { Link } from "gatsby";
import { LinkWithChevron } from "./utils";
import { formatUrl } from "./lib";
import { motion } from "framer-motion";
import { targetBlank } from "../helpers";

export const BlogCard = ({
  title,
  type,
  description,
  image,
  to,
  prefix,
  date,
  isExternal = false,
  showImage = true,
}: Prefix & {
  title: ReactNode;
  type: "blog" | "customer-story";
  description: string | ReactNode;
  image: ReactNode;
  to: string;
  date?: string;
  isExternal?: boolean;
  showImage?: boolean;
}) => (
  <motion.div
    layout
    animate={{ opacity: 1 }}
    initial={{ opacity: 0 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.35 }}
  >
    <Link to={formatUrl(prefix, to)} {...(isExternal ? targetBlank : {})}>
      <div className="blog__card">
        <div className="blog__card-wrapper">
          {showImage && (
            <div className="blog__card-image--wrapper">{image}</div>
          )}
          <div className="blog__card-content">
            <div className="blog__card-tags">
              <a href="#">companies</a>
            </div>
            <div className="blog__card-title">{title}</div>
            <div className="blog__card-description">{description}</div>
            <div className="blog__card-author">
              <div className="blog__card-author--img-wrapper">
                <img
                  src="http://images.ctfassets.net/ojxc8xtj0owo/Bx2zcRDMm5Co3Ub1afIeM/0f8b11cb391101bdcce57fc0f15797ef/joe.png?w=400&h=463&q=50"
                  alt="Joe Brennan"
                />
              </div>
              <div className="blog__card-author--name">
                <p>Joe Brennan</p>
                <span>Co-Founder & Sports Nerd</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  </motion.div>
);
