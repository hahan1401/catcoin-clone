icon_dirs=src/components/ui/icons
current_dirs=$PWD

cd $icon_dirs/svgs
> ../index.ts
for f in *.svg; do
	component_file=../components/$(echo "$(echo "${f%.svg}" | sed 's/[^ _-]*/\u&/g')" | sed 's/-//g').tsx
	echo $f $component_file
	echo "import { FC, SVGProps } from 'react';" > $component_file
	echo "" >> $component_file
	echo "import Icon from '../svgs/${f%.svg}.svg';" >> $component_file
	echo "" >> $component_file
	echo "export const $(echo "$(echo "${f%.svg}" | sed 's/[^ _-]*/\u&/g')" | sed 's/-//g'): FC<SVGProps<SVGSVGElement>> = (props) => <Icon {...props} />;" >> $component_file
	echo "export * from './components/$(echo "$(echo "${f%.svg}" | sed 's/[^ _-]*/\u&/g')" | sed 's/-//g')';" >> ../index.ts
done

