#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { AiRecapsBlogStack } from '../lib/ai-recaps-blog-stack';

const app = new cdk.App();

// Account-wide tags (BCD-493): the AWS account is shared, so every resource names its project.
const tags: Record<string, string> = {
  Project: 'ai-recaps',
  Environment: 'prd',
  Company: 'xennex',
  ManagedBy: 'cdk',
  Repo: 'XenneX-LLC/blog-yt-airecaps',
};
for (const [k, v] of Object.entries(tags)) cdk.Tags.of(app).add(k, v);

new AiRecapsBlogStack(app, 'AiRecapsBlogStack', {
  env: {
    account: '273500459613',
    region: 'us-east-1',
  },
});
