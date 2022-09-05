import { Text } from '@ui5/webcomponents-react'
import TypeIt from 'typeit-react'

export default function Header() {
  return (
    <header>
      <Text className="mx-4 mt-3 text-3xl font-extrabold">Profile</Text>
      <div>
        <Text className="mx-4 mt-2 min-h-[70px] text-base">
          <TypeIt
            getBeforeInit={instance =>
              instance
                .type(
                  "Hi and thanks for stopping by my website. I'm Wojciech and I <strong>build solutions for ERP.</strong>"
                )
                .pause(4000)
                .type('<br/>Feel free to contact me :)')
            }
          />
        </Text>
      </div>
    </header>
  )
}
