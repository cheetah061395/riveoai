import { writeFile, mkdir } from "fs/promises";
import { existsSync } from "fs";
import { dirname, basename, extname } from "path";

const ASSETS = [
  // Hero image
  {
    url: "https://d3lkc3n5th01x7.cloudfront.net/wp-content/uploads/2025/08/13053302/Home-page-1-1.png",
    path: "public/images/hero-3d.png",
  },
  // Client logos
  {
    url: "https://d3lkc3n5th01x7.cloudfront.net/wp-content/uploads/2025/12/18214438/clients-bw-logo-d.svg",
    path: "public/images/clients-logos-desktop.svg",
  },
  {
    url: "https://d3lkc3n5th01x7.cloudfront.net/wp-content/uploads/2025/12/18214541/clients-bw-logo-d-mobile.svg",
    path: "public/images/clients-logos-mobile.svg",
  },
  // Service icons
  {
    url: "https://d3lkc3n5th01x7.cloudfront.net/wp-content/uploads/2023/09/11230047/AIML-Strategy-Consulting.svg",
    path: "public/images/icons/ai-strategy.svg",
  },
  {
    url: "https://d3lkc3n5th01x7.cloudfront.net/wp-content/uploads/2023/02/24030255/AI-powered-App-Development.svg",
    path: "public/images/icons/ai-development.svg",
  },
  {
    url: "https://d3lkc3n5th01x7.cloudfront.net/wp-content/uploads/2023/10/31021730/Data-Engineering-2.svg",
    path: "public/images/icons/data-engineering.svg",
  },
  {
    url: "https://d3lkc3n5th01x7.cloudfront.net/wp-content/uploads/2023/03/22022845/Custom-Software-Development-icon.svg",
    path: "public/images/icons/software-dev.svg",
  },
  {
    url: "https://d3lkc3n5th01x7.cloudfront.net/wp-content/uploads/2023/12/11224501/Machine-Learning-icon.svg",
    path: "public/images/icons/machine-learning.svg",
  },
  {
    url: "https://d3lkc3n5th01x7.cloudfront.net/wp-content/uploads/2024/02/22040841/ai-co-pilot.svg",
    path: "public/images/icons/ai-agents.svg",
  },
  // Company graph
  {
    url: "https://d3lkc3n5th01x7.cloudfront.net/wp-content/uploads/2025/12/18223847/Company_Graph_2025_Web.png",
    path: "public/images/company-graph-desktop.png",
  },
  {
    url: "https://d3lkc3n5th01x7.cloudfront.net/wp-content/uploads/2025/12/18223909/Company_Graph_2025_Mob.png",
    path: "public/images/company-graph-mobile.png",
  },
  // Industry icons
  {
    url: "https://d3lkc3n5th01x7.cloudfront.net/wp-content/uploads/2024/02/20001756/Banking-Finance-icon.svg",
    path: "public/images/icons/banking-finance.svg",
  },
  {
    url: "https://d3lkc3n5th01x7.cloudfront.net/wp-content/uploads/2024/02/20002048/Manufacturing-icon.svg",
    path: "public/images/icons/manufacturing.svg",
  },
  {
    url: "https://d3lkc3n5th01x7.cloudfront.net/wp-content/uploads/2024/02/20002710/Retail-E-commerce-icon.svg",
    path: "public/images/icons/retail.svg",
  },
  {
    url: "https://d3lkc3n5th01x7.cloudfront.net/wp-content/uploads/2024/02/20002850/Logistics-icon.svg",
    path: "public/images/icons/logistics.svg",
  },
  {
    url: "https://d3lkc3n5th01x7.cloudfront.net/wp-content/uploads/2024/02/20002954/Healthcare-icon.svg",
    path: "public/images/icons/healthcare.svg",
  },
  {
    url: "https://d3lkc3n5th01x7.cloudfront.net/wp-content/uploads/2024/02/20003042/Technology-icon.svg",
    path: "public/images/icons/technology.svg",
  },
  {
    url: "https://d3lkc3n5th01x7.cloudfront.net/wp-content/uploads/2024/02/20003125/Consumer-Electronics-icon.svg",
    path: "public/images/icons/consumer-electronics.svg",
  },
  {
    url: "https://d3lkc3n5th01x7.cloudfront.net/wp-content/uploads/2024/02/20003203/Startups-icon.svg",
    path: "public/images/icons/startups.svg",
  },
  // Portfolio images
  {
    url: "https://d3lkc3n5th01x7.cloudfront.net/wp-content/uploads/2024/02/26234259/ZBrain-portfolio-image.png",
    path: "public/images/portfolio/zbrain.png",
  },
  {
    url: "https://d3lkc3n5th01x7.cloudfront.net/wp-content/uploads/2024/03/29005630/AI-App-for-Safer-Machinery-Troubleshooting-work-image.png",
    path: "public/images/portfolio/machinery.png",
  },
  {
    url: "https://d3lkc3n5th01x7.cloudfront.net/wp-content/uploads/2023/09/17235423/Scrut-portfolio-image-1.png",
    path: "public/images/portfolio/scrut.png",
  },
  // Testimonial logos
  {
    url: "https://d3lkc3n5th01x7.cloudfront.net/wp-content/uploads/2024/03/15024919/Mask-Group-22%402x.png",
    path: "public/images/testimonials/eton.png",
  },
  {
    url: "https://d3lkc3n5th01x7.cloudfront.net/wp-content/uploads/2024/03/15070118/Mask-Group-33%402x.png",
    path: "public/images/testimonials/icruise.png",
  },
  {
    url: "https://d3lkc3n5th01x7.cloudfront.net/wp-content/uploads/2024/03/15070205/Mask-Group-21%402x.png",
    path: "public/images/testimonials/oreilly.png",
  },
  {
    url: "https://d3lkc3n5th01x7.cloudfront.net/wp-content/uploads/2024/03/15070256/Mask-Group-15%402x.png",
    path: "public/images/testimonials/siemens.png",
  },
  // As Mentioned In
  {
    url: "https://d3lkc3n5th01x7.cloudfront.net/wp-content/uploads/2024/03/12212400/Mask-Group-20.svg",
    path: "public/images/mentioned-in-desktop.svg",
  },
  {
    url: "https://d3lkc3n5th01x7.cloudfront.net/wp-content/uploads/2024/03/12212432/Mask-Group-21.svg",
    path: "public/images/mentioned-in-mobile.svg",
  },
  // News thumbnails
  {
    url: "https://d3lkc3n5th01x7.cloudfront.net/wp-content/uploads/2024/09/19213840/The-Hackett-Group-Announces-Strategic-Acquisition-of-Leading-Gen-AI-Development-Firm-LeewayHertz-feature.svg",
    path: "public/images/news/hackett-acquisition.svg",
  },
  {
    url: "https://d3lkc3n5th01x7.cloudfront.net/wp-content/uploads/2023/09/18084446/forbes-top-ai-consulting-firms.svg",
    path: "public/images/news/forbes.svg",
  },
  {
    url: "https://d3lkc3n5th01x7.cloudfront.net/wp-content/uploads/2024/08/23004244/Group-9.svg",
    path: "public/images/news/gartner.svg",
  },
  {
    url: "https://d3lkc3n5th01x7.cloudfront.net/wp-content/uploads/2023/12/08031545/SP-Global.png",
    path: "public/images/news/sp-global.png",
  },
  // Engagement model icons
  {
    url: "https://d3lkc3n5th01x7.cloudfront.net/wp-content/uploads/2021/10/27011136/Dedicated-Team.svg",
    path: "public/images/icons/dedicated-team.svg",
  },
  {
    url: "https://d3lkc3n5th01x7.cloudfront.net/wp-content/uploads/2021/10/27011137/Team-Extention.svg",
    path: "public/images/icons/team-extension.svg",
  },
  {
    url: "https://d3lkc3n5th01x7.cloudfront.net/wp-content/uploads/2021/10/27011137/Project-Based-Model.svg",
    path: "public/images/icons/project-based.svg",
  },
  // Blog post images
  {
    url: "https://d3lkc3n5th01x7.cloudfront.net/wp-content/uploads/2024/06/06043352/Customer-service-agent.png",
    path: "public/images/blog/customer-service-agent.png",
  },
  {
    url: "https://d3lkc3n5th01x7.cloudfront.net/wp-content/uploads/2024/05/20232301/Group-1924.svg",
    path: "public/images/blog/agentic-rag.svg",
  },
  {
    url: "https://d3lkc3n5th01x7.cloudfront.net/wp-content/uploads/2023/01/11202020/Generative-AI-Use-Cases-and-Applications-feature.svg",
    path: "public/images/blog/generative-ai.svg",
  },
];

async function download(url, filePath) {
  const dir = dirname(filePath);
  if (!existsSync(dir)) {
    await mkdir(dir, { recursive: true });
  }
  try {
    const res = await fetch(url);
    if (!res.ok) {
      console.error(`  FAIL ${res.status}: ${filePath}`);
      return;
    }
    const buffer = Buffer.from(await res.arrayBuffer());
    await writeFile(filePath, buffer);
    console.log(`  OK: ${filePath} (${(buffer.length / 1024).toFixed(1)}KB)`);
  } catch (err) {
    console.error(`  ERR: ${filePath} - ${err.message}`);
  }
}

async function main() {
  console.log(`Downloading ${ASSETS.length} assets...`);
  // Batch 4 at a time
  for (let i = 0; i < ASSETS.length; i += 4) {
    const batch = ASSETS.slice(i, i + 4);
    await Promise.all(batch.map((a) => download(a.url, a.path)));
  }
  console.log("Done!");
}

main();
