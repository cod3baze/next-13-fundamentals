import { Suspense } from "react";

import { GithubProfile } from "@/components/github-profile";
import { LongWaitComponent } from "@/components/long-wait-component";

export default function HomePage() {
  return (
    <div>
      <h1>Home</h1>

      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse error
        praesentium ducimus culpa quia consequuntur aliquid, molestias enim
        voluptate inventore nihil veritatis odit aliquam quas ipsa! Animi vel
        quasi voluptate?
      </p>

      <Suspense fallback={<p>Loading LongWaitComponent</p>}>
        <LongWaitComponent />
      </Suspense>

      <Suspense fallback={<p>Loading GithubProfile</p>}>
        <GithubProfile />
      </Suspense>
    </div>
  );
}
