import {
  PrismaClient,
  AccessDurationType,
} from "../src/generated/prisma-client";

const prisma = new PrismaClient();

const ADMIN_USER_ID_SEED = "admin-user-placeholder-id";
const ADMIN_EMAIL = "admin@example.com";

// Provided data
const appData = [
  {
    id: "clq1234567891",
    name: "Slack",
    url: "https://slack.com",
    logo: "https://asset.brandfetch.io/id9arWx3H_/idBpOGO6N_.jpeg",
    createdAt: "2023-01-15T08:00:00Z",
    updatedAt: "2023-12-20T15:30:00Z",
    deletedAt: null,
  },
  {
    id: "clq1234567892",
    name: "Linear",
    url: "https://linear.app",
    logo: "https://asset.brandfetch.io/iduDa181eM/idlwljQhgs.jpeg",
    createdAt: "2023-02-01T09:15:00Z",
    updatedAt: "2023-12-19T11:20:00Z",
    deletedAt: null,
  },
  {
    id: "clq1234567893",
    name: "GitHub",
    url: "https://github.com",
    logo: "https://asset.brandfetch.io/idZAyF9rlg/id__5yUccv.png",
    createdAt: "2023-01-10T10:00:00Z",
    updatedAt: "2023-12-21T09:45:00Z",
    deletedAt: null,
  },
  {
    id: "clq1234567894",
    name: "Workday",
    url: "https://www.workday.com",
    logo: "https://asset.brandfetch.io/id0V-YF4nE/idk3QbqiQL.jpeg",
    createdAt: "2023-03-15T14:30:00Z",
    updatedAt: "2023-12-18T16:20:00Z",
    deletedAt: null,
  },
  {
    id: "clq1234567895",
    name: "Confluence",
    url: "https://www.atlassian.com/software/confluence",
    logo: "https://asset.brandfetch.io/idlQIwGMOK/idCRjq-7O_.png",
    createdAt: "2023-02-20T11:45:00Z",
    updatedAt: "2023-12-20T13:15:00Z",
    deletedAt: null,
  },
  {
    id: "clq1234567896",
    name: "Ramp",
    url: "https://ramp.com",
    logo: "https://asset.brandfetch.io/idWQ_FWEk6/idYToYIla-.jpeg",
    createdAt: "2023-04-01T09:00:00Z",
    updatedAt: "2023-12-19T14:30:00Z",
    deletedAt: null,
  },
  {
    id: "clq1234567897",
    name: "Datadog",
    url: "https://www.datadoghq.com",
    logo: "https://asset.brandfetch.io/idg33VVWFZ/id_htPDJBQ.png",
    createdAt: "2023-03-10T13:20:00Z",
    updatedAt: "2023-12-21T10:45:00Z",
    deletedAt: null,
  },
  {
    id: "clq1234567898",
    name: "PagerDuty",
    url: "https://www.pagerduty.com",
    logo: "https://asset.brandfetch.io/idIXh9WELn/idYPNr2AS9.jpeg",
    createdAt: "2023-01-25T15:10:00Z",
    updatedAt: "2023-12-20T17:25:00Z",
    deletedAt: null,
  },
  {
    id: "clq1234567899",
    name: "Zoom",
    url: "https://zoom.us",
    logo: "https://asset.brandfetch.io/id3aO4Szj3/idfZvWPDjP.jpeg",
    createdAt: "2023-02-05T08:30:00Z",
    updatedAt: "2023-12-21T11:50:00Z",
    deletedAt: null,
  },
  {
    id: "clq1234567810",
    name: "Miro",
    url: "https://miro.com",
    logo: "https://asset.brandfetch.io/idAnDTFapY/idN2G6pGva.jpeg",
    createdAt: "2023-01-05T10:20:00Z",
    updatedAt: "2023-12-19T15:40:00Z",
    deletedAt: null,
  },
];

const userData = [
  {
    id: "clq2345678901",
    email: "sarah.johnson@company.com",
    firstName: "Sarah",
    lastName: "Johnson",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    title: "Senior Software Engineer",
    department: "Engineering",
    createdAt: "2023-01-15T08:30:00Z",
    updatedAt: "2023-12-20T14:25:00Z",
    deletedAt: null,
  },
  {
    id: "clq2345678902",
    email: "michael.chen@company.com",
    firstName: "Michael",
    lastName: "Chen",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    title: "Product Manager",
    department: "Product",
    createdAt: "2023-02-01T09:45:00Z",
    updatedAt: "2023-12-19T16:30:00Z",
    deletedAt: null,
  },
  {
    id: "clq2345678903",
    email: "emily.davis@company.com",
    firstName: "Emily",
    lastName: "Davis",
    avatar: "https://randomuser.me/api/portraits/women/3.jpg",
    title: "UX Designer",
    department: "Design",
    createdAt: "2023-03-10T10:15:00Z",
    updatedAt: "2023-12-21T11:20:00Z",
    deletedAt: null,
  },
  {
    id: "clq2345678904",
    email: "james.wilson@company.com",
    firstName: "James",
    lastName: "Wilson",
    avatar: "https://randomuser.me/api/portraits/men/4.jpg",
    title: "Sales Director",
    department: "Sales",
    createdAt: "2023-01-20T11:30:00Z",
    updatedAt: "2023-12-20T15:45:00Z",
    deletedAt: null,
  },
  {
    id: "clq2345678905",
    email: "sophia.garcia@company.com",
    firstName: "Sophia",
    lastName: "Garcia",
    avatar: "https://randomuser.me/api/portraits/women/5.jpg",
    title: "HR Manager",
    department: "Human Resources",
    createdAt: "2023-02-15T12:45:00Z",
    updatedAt: "2023-12-19T17:50:00Z",
    deletedAt: null,
  },
  {
    id: "clq2345678906",
    email: "daniel.kim@company.com",
    firstName: "Daniel",
    lastName: "Kim",
    avatar: "https://randomuser.me/api/portraits/men/6.jpg",
    title: "Data Scientist",
    department: "Data",
    createdAt: "2023-03-20T13:15:00Z",
    updatedAt: "2023-12-21T12:30:00Z",
    deletedAt: null,
  },
  {
    id: "clq2345678907",
    email: "olivia.brown@company.com",
    firstName: "Olivia",
    lastName: "Brown",
    avatar: "https://randomuser.me/api/portraits/women/7.jpg",
    title: "Marketing Manager",
    department: "Marketing",
    createdAt: "2023-01-25T14:30:00Z",
    updatedAt: "2023-12-20T16:55:00Z",
    deletedAt: null,
  },
  {
    id: "clq2345678908",
    email: "william.taylor@company.com",
    firstName: "William",
    lastName: "Taylor",
    avatar: "https://randomuser.me/api/portraits/men/8.jpg",
    title: "DevOps Engineer",
    department: "Engineering",
    createdAt: "2023-02-28T15:45:00Z",
    updatedAt: "2023-12-19T18:20:00Z",
    deletedAt: null,
  },
  {
    id: "clq2345678909",
    email: "ava.martinez@company.com",
    firstName: "Ava",
    lastName: "Martinez",
    avatar: "https://randomuser.me/api/portraits/women/9.jpg",
    title: "Customer Success Manager",
    department: "Customer Success",
    createdAt: "2023-03-25T16:15:00Z",
    updatedAt: "2023-12-21T13:40:00Z",
    deletedAt: null,
  },
  {
    id: "clq2345678910",
    email: "alexander.lee@company.com",
    firstName: "Alexander",
    lastName: "Lee",
    avatar: "https://randomuser.me/api/portraits/men/10.jpg",
    title: "Frontend Developer",
    department: "Engineering",
    createdAt: "2023-01-30T17:30:00Z",
    updatedAt: "2023-12-20T17:15:00Z",
    deletedAt: null,
  },
  {
    id: "clq2345678911",
    email: "isabella.wong@company.com",
    firstName: "Isabella",
    lastName: "Wong",
    avatar: "https://randomuser.me/api/portraits/women/11.jpg",
    title: "Product Designer",
    department: "Design",
    createdAt: "2023-02-10T18:45:00Z",
    updatedAt: "2023-12-19T19:30:00Z",
    deletedAt: null,
  },
  {
    id: "clq2345678912",
    email: "ethan.patel@company.com",
    firstName: "Ethan",
    lastName: "Patel",
    avatar: "https://randomuser.me/api/portraits/men/12.jpg",
    title: "Backend Developer",
    department: "Engineering",
    createdAt: "2023-03-15T19:15:00Z",
    updatedAt: "2023-12-21T14:45:00Z",
    deletedAt: null,
  },
  {
    id: "clq2345678913",
    email: "mia.anderson@company.com",
    firstName: "Mia",
    lastName: "Anderson",
    avatar: "https://randomuser.me/api/portraits/women/13.jpg",
    title: "Finance Manager",
    department: "Finance",
    createdAt: "2023-01-05T20:30:00Z",
    updatedAt: "2023-12-20T18:35:00Z",
    deletedAt: null,
  },
  {
    id: "clq2345678914",
    email: "lucas.rodriguez@company.com",
    firstName: "Lucas",
    lastName: "Rodriguez",
    avatar: "https://randomuser.me/api/portraits/men/14.jpg",
    title: "Solutions Architect",
    department: "Engineering",
    createdAt: "2023-02-20T21:45:00Z",
    updatedAt: "2023-12-19T20:50:00Z",
    deletedAt: null,
  },
  {
    id: "clq2345678915",
    email: "emma.thompson@company.com",
    firstName: "Emma",
    lastName: "Thompson",
    avatar: "https://randomuser.me/api/portraits/women/15.jpg",
    title: "Content Strategist",
    department: "Marketing",
    createdAt: "2023-03-30T22:15:00Z",
    updatedAt: "2023-12-21T15:55:00Z",
    deletedAt: null,
  },
];

const groupData = [
  {
    id: "clq3456789101",
    name: "Engineering Team",
    description: "Core engineering and development team",
    note: "Responsible for product development and technical infrastructure",
    createdAt: "2023-01-15T08:00:00Z",
    updatedAt: "2023-12-21T16:30:00Z",
    deletedAt: null,
  },
  {
    id: "clq3456789102",
    name: "Product Management",
    description: "Product strategy and roadmap team",
    note: "Oversees product vision and feature prioritization",
    createdAt: "2023-02-01T09:15:00Z",
    updatedAt: "2023-12-20T14:45:00Z",
    deletedAt: null,
  },
  {
    id: "clq3456789103",
    name: "Marketing",
    description: "Marketing and communications team",
    note: "Handles brand strategy and marketing campaigns",
    createdAt: "2023-03-10T10:30:00Z",
    updatedAt: "2023-12-19T17:20:00Z",
    deletedAt: null,
  },
  {
    id: "clq3456789104",
    name: "Sales",
    description: "Sales and business development",
    note: "Responsible for revenue generation and client relationships",
    createdAt: "2023-04-05T11:45:00Z",
    updatedAt: "2023-12-21T13:15:00Z",
    deletedAt: null,
  },
  {
    id: "clq3456789105",
    name: "Customer Success",
    description: "Customer support and success team",
    note: "Ensures customer satisfaction and retention",
    createdAt: "2023-05-20T12:00:00Z",
    updatedAt: "2023-12-20T15:30:00Z",
    deletedAt: null,
  },
  {
    id: "clq3456789106",
    name: "Finance",
    description: "Financial operations team",
    note: "Manages company finances and accounting",
    createdAt: "2023-06-15T13:15:00Z",
    updatedAt: "2023-12-19T11:45:00Z",
    deletedAt: null,
  },
  {
    id: "clq3456789107",
    name: "HR",
    description: "Human resources team",
    note: "Handles personnel and workplace culture",
    createdAt: "2023-07-01T14:30:00Z",
    updatedAt: "2023-12-21T09:30:00Z",
    deletedAt: null,
  },
  {
    id: "clq3456789108",
    name: "Legal",
    description: "Legal and compliance team",
    note: "Manages legal affairs and regulatory compliance",
    createdAt: "2023-08-10T15:45:00Z",
    updatedAt: "2023-12-20T10:15:00Z",
    deletedAt: null,
  },
  {
    id: "clq3456789109",
    name: "Operations",
    description: "Business operations team",
    note: "Oversees day-to-day company operations",
    createdAt: "2023-09-05T16:00:00Z",
    updatedAt: "2023-12-19T12:45:00Z",
    deletedAt: null,
  },
  {
    id: "clq3456789110",
    name: "Design",
    description: "UI/UX and design team",
    note: "Creates user interfaces and visual designs",
    createdAt: "2023-10-15T17:15:00Z",
    updatedAt: "2023-12-21T14:00:00Z",
    deletedAt: null,
  },
];

async function main() {
  console.log(`Start seeding ...`);

  // Seed Groups first (no dependencies)
  console.log("Seeding groups...");
  for (const group of groupData) {
    const result = await prisma.cnsl_group.upsert({
      where: { id: group.id },
      update: {
        name: group.name,
        description: group.description,
        note: group.note,
        createdAt: group.createdAt ? new Date(group.createdAt) : undefined,
        updatedAt: group.updatedAt ? new Date(group.updatedAt) : new Date(),
        deletedAt: group.deletedAt ? new Date(group.deletedAt) : null,
      },
      create: {
        id: group.id,
        name: group.name,
        description: group.description,
        note: group.note,
        createdAt: group.createdAt ? new Date(group.createdAt) : undefined,
        updatedAt: group.updatedAt ? new Date(group.updatedAt) : undefined,
        deletedAt: group.deletedAt ? new Date(group.deletedAt) : null,
      },
    });
    console.log(`  Upserted group: ${result.name} (${result.id})`);
  }

  console.log("Seeding admin user...");
  const adminUser = await prisma.user.upsert({
    where: { id: ADMIN_USER_ID_SEED },
    update: {
      email: ADMIN_EMAIL,
      firstName: "Admin",
      lastName: "User",
      groups: {
        connect: groupData.map((group) => ({ id: group.id })),
      },
    },
    create: {
      id: ADMIN_USER_ID_SEED,
      email: ADMIN_EMAIL,
      firstName: "Admin",
      lastName: "User",
      groups: {
        connect: groupData.map((group) => ({ id: group.id })),
      },
    },
  });
  console.log(`  Upserted admin user: ${adminUser.email} (${adminUser.id})`);
  // ---> End Seed Admin User <---

  // Seed Users (depends on groups for relations later)
  console.log("Seeding users...");
  for (const user of userData) {
    const result = await prisma.user.upsert({
      where: { email: user.email }, // Use email as unique constraint for upsert
      update: {
        id: user.id, // Ensure ID matches if record exists
        firstName: user.firstName,
        lastName: user.lastName,
        avatar: user.avatar,
        title: user.title,
        department: user.department,
        createdAt: user.createdAt ? new Date(user.createdAt) : undefined,
        updatedAt: user.updatedAt ? new Date(user.updatedAt) : new Date(),
        deletedAt: user.deletedAt ? new Date(user.deletedAt) : null,
        // Add group connections based on department (example)
        groups: {
          connect: groupData
            .filter((g) => g.name?.startsWith(user.department ?? "undefined"))
            .map((g) => ({ id: g.id })),
        },
      },
      create: {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        avatar: user.avatar,
        title: user.title,
        department: user.department,
        createdAt: user.createdAt ? new Date(user.createdAt) : undefined,
        updatedAt: user.updatedAt ? new Date(user.updatedAt) : undefined,
        deletedAt: user.deletedAt ? new Date(user.deletedAt) : null,
        // Add group connections based on department (example)
        groups: {
          connect: groupData
            .filter((g) => g.name?.startsWith(user.department ?? "undefined"))
            .map((g) => ({ id: g.id })),
        },
      },
    });
    console.log(
      `  Upserted user: ${result.firstName} ${result.lastName} (${result.id})`
    );
  }

  // Seed Apps (can assign owner now that users exist)
  console.log("Seeding apps...");
  for (const app of appData) {
    // Example: Assign Sarah Johnson as owner of GitHub
    const ownerId = app.name === "GitHub" ? "clq2345678901" : undefined;

    const result = await prisma.app.upsert({
      where: { id: app.id },
      update: {
        name: app.name,
        url: app.url,
        logo: app.logo,
        createdAt: app.createdAt ? new Date(app.createdAt) : undefined,
        updatedAt: app.updatedAt ? new Date(app.updatedAt) : new Date(),
        deletedAt: app.deletedAt ? new Date(app.deletedAt) : null,
        ownerId: ownerId,
      },
      create: {
        id: app.id,
        name: app.name,
        url: app.url,
        logo: app.logo,
        createdAt: app.createdAt ? new Date(app.createdAt) : undefined,
        updatedAt: app.updatedAt ? new Date(app.updatedAt) : undefined,
        deletedAt: app.deletedAt ? new Date(app.deletedAt) : null,
        ownerId: ownerId,
      },
    });
    console.log(`  Upserted app: ${result.name} (${result.id})`);
  }

  // Seed Policies (now that apps, users, groups exist)
  console.log("Seeding policies...");
  // Policy 1: GitHub access for Engineering Team, reviewed by App Owner
  const policy1 = await prisma.policy.upsert({
    where: { id: "pol_github_eng" },
    update: {},
    create: {
      id: "pol_github_eng",
      name: "GitHub Engineering Access",
      description: "Grants standard GitHub access to Engineering team members.",
      app: { connect: { id: "clq1234567893" } }, // Connect to GitHub app
      visibleToEveryone: false,
      visibleGroups: { connect: { id: "clq3456789101" } }, // Visible to Engineering Team
      accessDurationType: AccessDurationType.INDEFINITE,
      useAppOwnerAsReviewer: true, // Reviewed by App Owner (Sarah Johnson)
      approvalSteps: [
        {
          type: "github_add_to_team",
          team_slug: "engineering",
          role: "member",
        },
      ],
    },
  });
  console.log(`  Upserted policy: ${policy1.name} (${policy1.id})`);

  // Policy 2: Slack access for everyone, reviewed by Michael & Sophia
  const policy2 = await prisma.policy.upsert({
    where: { id: "pol_slack_everyone" },
    update: {},
    create: {
      id: "pol_slack_everyone",
      name: "Slack General Access",
      description: "Grants basic Slack access to all employees.",
      app: { connect: { id: "clq1234567891" } }, // Connect to Slack app
      visibleToEveryone: true,
      accessDurationType: AccessDurationType.INDEFINITE,
      useAppOwnerAsReviewer: false,
      reviewers: {
        // Reviewed by Michael Chen and Sophia Garcia
        connect: [
          { email: "michael.chen@company.com" },
          { email: "sophia.garcia@company.com" },
        ],
      },
      approvalSteps: [{ type: "slack_invite_user", role: "member" }],
    },
  });
  console.log(`  Upserted policy: ${policy2.name} (${policy2.id})`);

  console.log(`Seeding finished.`);
}

main()
  .catch((e) => {
    console.error(e);
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
