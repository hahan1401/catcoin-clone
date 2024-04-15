const SectionHeader = ({ title }: { title: string }) => {
  return (
    <div className="text-4xl leading-[40px] md:text-[52px] md:leading-[60px] font-bold my-5">
      {title}
    </div>
  );
};

export default SectionHeader;
