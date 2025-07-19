'use client';

import { useEffect, useRef, useState } from "react";
import { skillData, Skill, SkillLevel, SkillCategory } from "../data/skills";
import * as SiIcons from "react-icons/si";
import * as FaIcons from "react-icons/fa";
import * as PiIcons from "react-icons/pi";
import * as BiIcons from "react-icons/bi";
import * as GiIcons from "react-icons/gi";

const iconMap = { ...SiIcons, ...FaIcons, ...PiIcons, ...BiIcons, ...GiIcons };
