import React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Divider,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const task = [
  {
    title: "todo 1",
    status: "todo",
    priority: "low",
  },
  {
    title: "todo 2",
    status: "todo",
    priority: "low",
  },
  {
    title: "todo 2",
    status: "todo",
    priority: "low",
  },
];

export default function TodoTasks() {
  const renderTasks = task.map((item, idx) => {
    return (
      <div key={idx}>
        <ListItem>
          <ListItemText primary={item.title} />
        </ListItem>
        <Divider />
      </div>
    );
  });

  return (
    <Box>
      <Accordion sx={{ bgcolor: "#bef264" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          id="todo-panel"
          sx={{ display: "flex", flexDirection: "row-reverse" }}
        >
          <Typography>Todos</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List>{renderTasks}</List>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}
