import { Text, Timeline, TimelineItem } from '@ui5/webcomponents-react'
import '@ui5/webcomponents-icons/dist/signature'
import '@ui5/webcomponents-icons/dist/badge'
import '@ui5/webcomponents-icons/dist/activate'
import '@ui5/webcomponents-icons/dist/sap-logo-shape'
import Memoji from './Memoji'

export default function About() {
  return (
    <aside className="mx-1 mt-4 hidden min-w-[240px] flex-auto flex-col gap-2 md:flex">
      <Text className="mx-4 mt-3 overflow-hidden text-2xl font-extrabold">Storyline</Text>
      <div className="relative flex">
        <Memoji />
        <Text className="absolute top-5 left-32 overflow-hidden font-bold">Wojciech Ligęza</Text>
        <Text className="absolute top-10 left-32 overflow-hidden text-xs">Software Developer</Text>
      </div>
      <Text className="mx-4 mt-1 overflow-hidden text-lg font-bold">Latest Events</Text>
      <Timeline className="ml-6">
        <TimelineItem icon="signature" titleText="The last step to graduation" subtitleText="08/07/2022">
          The beginning of writing an engineering thesis
        </TimelineItem>
        <TimelineItem icon="badge" titleText="Azure Certifications" subtitleText="17/06/2022">
          <em>Microsoft Azure Fundamentals</em> exams passed
        </TimelineItem>
        <TimelineItem icon="activate" titleText="New job" subtitleText="14/04/2022">
          <em>&ldquo;Something Ends, Something Begins&rdquo;</em>
        </TimelineItem>
        <TimelineItem icon="sap-logo-shape" titleText="SAP Certificate" subtitleText="15/12/2021">
          <em>Building Applications on SAP BTP with Microsoft Services</em> exam passed
        </TimelineItem>
      </Timeline>
    </aside>
  )
}
