import axios from "axios";
import { useEffect, useState } from "react";

const TopicInfo = ({ topic_id }: { topic_id: String }) => {
  const [searchedTopic, setData] = useState({});

  // const [topic, setTopic] = useState(topic_id);

  async function fetchTopicData() {
    const { data } = await axios.get(`/api/topic`, {
      params: { topic_id: topic_id },
    });

    setData({ ...data.existingTopic });
  }

  useEffect(() => {
    fetchTopicData();
  }, []);
  return (
    <>
      <div className="col-span-12 rounded-lg border border-stroke bg-red text-white px-5 pb-5 pt-7.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-12">
        <div className="border-b border-stroke px-7 py-4 dark:border-strokedark">
          <h3 className="font-medium text-white dark:text-white">Зөвлөмж</h3>
        </div>

        <div className="mb-5.5 text-white flex flex-col gap-5.5 sm:flex-row py-7">
          <div>{!searchedTopic ? "" : (searchedTopic as any).description}</div>
        </div>
      </div>
    </>
  );
};
export default TopicInfo;