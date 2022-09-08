import { useState } from 'react'
import { NotificationListGroupItem, NotificationListItem, Text } from '@ui5/webcomponents-react'
import '@ui5/webcomponents-icons/dist/navigation-right-arrow'

export default function Projects() {
  const [collapsed, setCollapsed] = useState(false)
  return (
    <section className="z-10 mx-4 mt-4 mb-4 h-[208px] w-[328px] overflow-y-scroll rounded-3xl bg-white p-2 shadow-lg scrollbar-hide sm:h-[280px] sm:w-[440px]">
      <NotificationListGroupItem
        style={{ overflow: 'hidden', zIndex: 0 }}
        titleText={`Projects / Main ${collapsed ? 'technologies' : 'tasks'}`}
        onToggle={() => setCollapsed(prev => !prev)}
      >
        <NotificationListItem priority="Low" titleText="Consalit" wrappingType="Normal" className="text-justify">
          In my current position I am building new functionalities in SAP for German clients, especially in the modules:
          Sales and Distribution, Materials Management.
          <br />I also maintain and develop Fiori Javascript Apps.
        </NotificationListItem>
        <NotificationListItem priority="Low" titleText="Accenture" wrappingType="Normal" className="text-justify">
          I participated in 3 different projects. During the longest running one(1.5 years), I worked in the Scrum team
          in which I was responsible for the design and development of the React application as well as its integration
          with SAP BW HANA, which streamlined the Phase In / Phase Out process for the clients of the Swiss healthcare
          organization.
          <br />
        </NotificationListItem>
        <NotificationListItem priority="Low" titleText="Freelancing" wrappingType="Normal" className="text-justify">
          This is the time of improving my programming. I am already a student of the Silesian University of Technology.
          I did some side projects, both with my colleagues from university and my own. I participated in the training
          organized by ING Tech, Accenture and IBM together with Silesian technical universities, which pushed me
          towards starting my professional career. I develop a service for e-commerce company that integrates with
          Allegro API to generate invoices in pdf format.
        </NotificationListItem>
      </NotificationListGroupItem>
      {collapsed ? (
        <div className="mt-6 ml-6 flex flex-col gap-6">
          <Text className="italic">
            <strong>JavaScript + TypeScript</strong>: 3.5 years of experience
          </Text>
          <Text className="italic">
            <strong>React</strong>: 2+ years of experience
          </Text>
          <Text className="italic">
            <strong>ABAP</strong>: 2.5 years of experience
          </Text>
          <Text className="italic">
            <strong>HANA</strong>: 1.5 years of experience
          </Text>
        </div>
      ) : null}
    </section>
  )
}
