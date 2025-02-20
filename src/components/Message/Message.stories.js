import { Message } from "./Message";
export default {
  title: "Components/Message",
  component: Message,
};

const Template = (args) => <Message {...args} />;

export const Success = Template.bind({});
export const Info = Template.bind({});
export const Warning = Template.bind({});
export const Danger = Template.bind({});

Success.args = {
  id: "success",
  type: "success",
  message_heading: "COVID-19 New services and service changes",
  message_body:
    "Find out about new support for Canadians during the COVID-19 pandemic and how Service Canada’s services are affectedFind out about new support for Canadians during the COVID-19 pandemic and how Service Canada’s services are affected",
  alert_icon_alt_text: "success icon",
  alert_icon_id: "success icon",
};

Info.args = {
  id: "info",
  type: "info",
  message_heading: "COVID-19 New services and service changes",
  message_body:
    "Find out about new support for Canadians during the COVID-19 pandemic and how Service Canada’s services are affectedFind out about new support for Canadians during the COVID-19 pandemic and how Service Canada’s services are affected",
  alert_icon_alt_text: "info icon",
  alert_icon_id: "info icon",
};

Warning.args = {
  id: "warning",
  type: "warning",
  message_heading: "COVID-19 New services and service changes",
  message_body:
    "Find out about new support for Canadians during the COVID-19 pandemic and how Service Canada’s services are affectedFind out about new support for Canadians during the COVID-19 pandemic and how Service Canada’s services are affected",
  alert_icon_alt_text: "warning icon",
  alert_icon_id: "warning icon",
};

Danger.args = {
  id: "danger",
  type: "danger",
  message_heading: "COVID-19 New services and service changes",
  message_body:
    "Find out about new support for Canadians during the COVID-19 pandemic and how Service Canada’s services are affectedFind out about new support for Canadians during the COVID-19 pandemic and how Service Canada’s services are affected",
  alert_icon_alt_text: "danger icon",
  alert_icon_id: "danger icon",
};
