import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Typography,
} from "@mui/material";

import PeopleIcon from "@mui/icons-material/People";
import SettingsIcon from "@mui/icons-material/Settings";
import BarChartIcon from "@mui/icons-material/BarChart";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const privacySections = [
  {
    id: 1,
    title: "Information We Collect",
    description:
      "We collect information such as your name, email address, and usage data.",
    details:
      "This information may be collected when you create an account, search for movies, update your profile, or interact with Streamify.",
    icon: <PeopleIcon />,
  },
  {
    id: 2,
    title: "How We Protect Your Information",
    description:
      "We use reasonable security measures to protect your personal information.",
    details:
      "Access to personal information is limited, and security measures are used to prevent unauthorized access, modification, or disclosure.",
    icon: <SettingsIcon />,
  },
  {
    id: 3,
    title: "Cookies and Technologies",
    description:
      "Cookies help us remember preferences and improve your experience.",
    details:
      "These technologies may remember login preferences and help us understand how visitors use different parts of the website.",
    icon: <BarChartIcon />,
  },
  {
    id: 4,
    title: "Contact and Privacy Choices",
    description:
      "Contact us to ask questions or manage your personal information.",
    details:
      "You may request access to your information, correct inaccurate information, or ask for your account information to be removed.",
    icon: <DashboardIcon />,
  },
];

const PrivacyPolicy = () => {
  return (
    <Box
      sx={{
        minHeight: "calc(100vh - 136px)",
        backgroundColor: "#F5F1FF",
        py: {
          xs: 5,
          md: 7,
        },
      }}
    >
      <Container maxWidth="md">
        {/* Page heading */}
        <Box
          sx={{
            maxWidth: 650,
            mx: "auto",
            textAlign: "center",
            mb: 5,
          }}
        >
          <Typography
            variant="h3"
            component="h1"
            fontWeight="bold"
            sx={{
              mb: 2,
              fontSize: {
                xs: 32,
                md: 40,
              },
            }}
          >
            Privacy Policy
          </Typography>

          <Typography
            color="text.secondary"
            fontWeight={500}
            sx={{
              maxWidth: 600,
              mx: "auto",
              lineHeight: 1.6,
            }}
          >
            Your privacy is important to us. This Privacy Policy explains how
            Streamify collects, uses, and protects your information.
          </Typography>
        </Box>

        {/* Privacy rows */}
        <Box
          sx={{
            maxWidth: 760,
            mx: "auto",
            backgroundColor: "white",
            border: "1px solid",
            borderColor: "divider",
            borderRadius: 2,
            overflow: "hidden",
          }}
        >
          {privacySections.map((section, index) => (
            <Accordion
              key={section.id}
              disableGutters
              elevation={0}
              sx={{
                "&:before": {
                  display: "none",
                },

                borderBottom:
                  index < privacySections.length - 1 ? "1px solid" : "none",

                borderColor: "divider",
              }}
            >
              <AccordionSummary
                expandIcon={<ChevronRightIcon />}
                aria-controls={`privacy-content-${section.id}`}
                id={`privacy-header-${section.id}`}
                sx={{
                  minHeight: 92,
                  px: {
                    xs: 2,
                    md: 3,
                  },

                  "& .MuiAccordionSummary-content": {
                    alignItems: "center",
                    my: 2,
                  },

                  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
                    transform: "rotate(90deg)",
                  },

                  "&:hover": {
                    backgroundColor: "#FAF8FF",
                  },
                }}
              >
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    minWidth: 40,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "50%",
                    color: "white",
                    backgroundColor: "#6D28D9",
                    mr: 2,

                    "& svg": {
                      fontSize: 23,
                    },
                  }}
                >
                  {section.icon}
                </Box>

                <Box>
                  <Typography
                    fontWeight="bold"
                    sx={{
                      color: "#6D28D9",
                      mb: 0.25,
                    }}
                  >
                    {section.title}
                  </Typography>

                  <Typography variant="body2" color="text.secondary">
                    {section.description}
                  </Typography>
                </Box>
              </AccordionSummary>

              <AccordionDetails
                id={`privacy-content-${section.id}`}
                sx={{
                  pl: {
                    xs: 2,
                    md: 10,
                  },
                  pr: 4,
                  pb: 3,
                }}
              >
                <Typography
                  color="text.secondary"
                  sx={{
                    lineHeight: 1.7,
                  }}
                >
                  {section.details}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default PrivacyPolicy;
