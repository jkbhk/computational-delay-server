# computational-delay-server

The computational delay server is meant to be deployed on a kuberenetes cluster.

The server simulates handling computationaly intensive tasks by entering a busy wait loop for a set duration.

Deploying multiple replicas of this server instance is useful for testing if the load balancer is working as intended.
