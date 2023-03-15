# computational-delay-server

The computational delay server is meant to be deployed on a kuberenetes cluster.

The server simulates handling computationaly intensive tasks by artificially modifying it's busy flag for a specified duration.

The server will reject clients when it is "busy".
