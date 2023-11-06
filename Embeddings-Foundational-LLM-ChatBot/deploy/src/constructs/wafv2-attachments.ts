// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.

// Permission is hereby granted, free of charge, to any person obtaining a copy of this
// software and associated documentation files (the "Software"), to deal in the Software
// without restriction, including without limitation the rights to use, copy, modify,
// merge, publish, distribute, sublicense, and/or sell copies of the Software, and to
// permit persons to whom the Software is furnished to do so.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
// INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
// PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
// HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
// OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
// SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

// --
// --  Author:        Jin Tan Ruan
// --  Linkedin:      https://www.linkedin.com/in/ztanruan
// --  Date:          04/11/2023
// --  Purpose:       WAF Construct
// --  Version:       0.1.0
// --  Disclaimer:    This code is provided "as is" in accordance with the repository license
// --  History
// --  When        Version     Who         What
// --  -----------------------------------------------------------------
// --  04/11/2023  0.1.0       jtanruan    Initial
// --  -----------------------------------------------------------------
// --

import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";

/**
 * Helper function to attach the waf to an apigatewayv2 http api
 * @param parent
 * @param name
 * @param webAcl
 * @param apigwv2
 * @returns
 */
export function attachWafV2ToLoadBalancer(
  /**
   * Parent construct to assign the association to.
   */
  parent: Construct,

  /**
   * Name of the construct
   */
  name: string,

  /**
   * WafV2 WebAcl
   */
  webAcl: cdk.aws_wafv2.CfnWebACL,

  /**
   * load balancer to attach the web acl to
   */
  loadBalancer: cdk.aws_elasticloadbalancingv2.ApplicationLoadBalancer
) {
  return new cdk.aws_wafv2.CfnWebACLAssociation(parent, name, {
    webAclArn: webAcl.attrArn,
    resourceArn: loadBalancer.loadBalancerArn,
  });
}
